import "./title.css";

/** Displays a page title with the given title text. */
export default function PageTitle({ title }) {
	return <h1 className="pageTitle">{title}</h1>;
}
