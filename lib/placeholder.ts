export function generatePlaceholderImage(width: number, height: number, text: string, hue: number = 60): string {
    if (typeof document === 'undefined') return ''

    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')

    if (!ctx) return ''

    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, `hsl(${hue}, 95%, 75%)`)
    gradient.addColorStop(0.5, `hsl(${hue}, 90%, 60%)`)
    gradient.addColorStop(1, `hsl(${hue}, 85%, 50%)`)

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    ctx.fillStyle = '#1a1a1a'
    ctx.font = 'bold 48px Inter, sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(text, width / 2, height / 2)

    return canvas.toDataURL()
}

export const CHARACTER_IMAGES = {
    R: generatePlaceholderImage(400, 400, 'R', 0),
    E: generatePlaceholderImage(400, 400, 'E', 30),
    U: generatePlaceholderImage(400, 400, 'U', 60),
    B: generatePlaceholderImage(400, 400, 'B', 90),
    N: generatePlaceholderImage(400, 400, 'N', 120),
    F: generatePlaceholderImage(400, 400, 'F', 180),
    A: generatePlaceholderImage(400, 400, 'A', 210),
    D: generatePlaceholderImage(400, 400, 'D', 240),
    S: generatePlaceholderImage(400, 400, 'S', 300),
    ' ': generatePlaceholderImage(400, 400, '✨', 270),
}

export const PLACEHOLDER_IMAGE = generatePlaceholderImage(400, 400, 'Design')

export const PROFILE_IMAGE_PRIMARY = generatePlaceholderImage(600, 800, 'RF', 100)
export const PROFILE_IMAGE_SECONDARY = generatePlaceholderImage(600, 800, 'Design', 280)
