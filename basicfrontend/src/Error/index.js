import "./errors.css";

/**
 * Displays a red box with the given error message.
 * If error message is blank, renders nothing.
 */
export default function Error({ error }) {
	if (!error) return <></>;

	return <div className="error">{error}</div>;
}
