process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const fs = require('fs')
const path = require('path')

const owner = 'doujie081231'
const repo = 'versePc'

async function fetchReleases() {
  try {
    console.log('正在获取 GitHub Releases...')
    
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/releases?per_page=50`
    )
    
    if (!response.ok) {
      throw new Error(`GitHub API 返回错误: ${response.status}`)
    }

    const releases = await response.json()
    
    if (releases.length === 0) {
      console.log('⚠️ 没有找到任何 Release')
      return
    }
    

    // 构建 markdown 内容
    let markdown = `
# ${repo} 更新日志\n\n`
    markdown += `> 内容从 GitHub Releases 获取，非实时更新。\n\n`
    
    releases.forEach((release, index) => {
      const date = new Date(release.published_at).toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
      
      markdown += `## ${release.tag_name} (${date})\n\n`
      
      if (release.body) {
        const body = release.body.trim()
        markdown += body + '\n\n'
      } else {
        markdown += '*暂无详细说明*\n\n'
      }
      
      if (index < releases.length - 1) {
        markdown += '---\n\n'
      }
    })

    // ✅ 关键修复：先检查并创建目录
    const outputDir = path.join(__dirname, '..', 'docs')
    console.log('📁 目标目录:', outputDir)
    
    // 检查 docs 目录是否存在
    const docsDir = path.join(__dirname, '..', 'docs')
    if (!fs.existsSync(docsDir)) {
      console.log('📁 创建 docs 目录')
      fs.mkdirSync(docsDir, { recursive: true })
    }
    
    // 检查 changelogs 目录是否存在
    if (!fs.existsSync(outputDir)) {
      console.log('📁 创建 changelogs 目录')
      fs.mkdirSync(outputDir, { recursive: true })
    }

    // 写入文件
    const outputPath = path.join(outputDir, 'releases.md')
    fs.writeFileSync(outputPath, markdown, 'utf-8')
    console.log(`✅ 成功同步 ${releases.length} 个 Release`)
    console.log(`📄 文件已保存到: ${outputPath}`)
    
  } catch (error) {
    console.error('❌ 获取失败:', error.message)
    console.error('错误详情:', error)
    process.exit(1)
  }
}

fetchReleases()