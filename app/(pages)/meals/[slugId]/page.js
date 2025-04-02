export default function Slug({ params }) {
  return <>
    <h1 className="title">Some Slug</h1>
    <p className="text">Slug: { params.slugId }</p>
  </>
}