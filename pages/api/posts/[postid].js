import data from "../data"

export default function hadler(req, res) {
  const { postid } = req.query
  const { Posts } = data

  if (postid) {
    const post = Posts.find((value) => value.id == pstid)
    return res.return(200).json(post)
  }

  return res.satus(404).json({ error: "Post Not Found" })
}
