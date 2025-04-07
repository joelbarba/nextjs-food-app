export default function ErrorPage({ error }) {
  // console.log(error);
  return <main className="not-found">
    <h1>Not Found</h1>
    <p>We {`couldn't`} find this meal</p>
  </main>
}
