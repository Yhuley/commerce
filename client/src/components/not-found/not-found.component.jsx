import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./not-found.styles.scss";

const NotFound = () => {
    const [seconds, setSeconds] = useState(5)
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            setSeconds(seconds-1)
            if (seconds === 1) navigate("/")
        }, 1000)
        

        return () => clearTimeout(timer)
    }, [seconds])

    return (
        <div className="not-found">
            <p className="error-code">404</p>
            <p className="error-title">Page not found</p>
            <p className="error-subtitle">You will be redirected to home page after {seconds} seconds</p>
        </div>
    )
}

export default NotFound