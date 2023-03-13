export async function json(req, res) {
  const buffers = []

  for await (const chunk of req) {
    buffers.push(chunk)
  }

  try {
    req.body = JSON.parse(buffer.concat(buffers).toString())
  } catch {
    req.body = null
  }

  res.setHeader('Content-Type', 'application/json') //back to front
}