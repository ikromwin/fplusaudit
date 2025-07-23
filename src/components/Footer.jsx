import { Link } from "react-router-dom";

export default function Footer({ translations }) {

    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} F-plusaudit</p>
        </footer>
    );
}