import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import css from "./HomePage.module.css";
export default function HomePage() {
  return (
    <>
      <DocumentTitle> Home</DocumentTitle>
      <div className={css.wrapper}>
        <h1 className={css.title}>Contacts manager home page</h1>
      </div>
    </>
  );
}
