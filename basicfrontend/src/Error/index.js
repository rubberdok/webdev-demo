import "./errors.css";

export default function Error({ error }) {
	if (!error) return <></>;

	return <div className="error">{error}</div>;
}
