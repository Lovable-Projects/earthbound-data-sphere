import { AnimatedUnderline } from "@/components/ui/animated-underline";
import { Link } from "react-router-dom";

const Demo = () => {
    return (
        <>
            <AnimatedUnderline>
                <Link to="/">Home</Link>
            </AnimatedUnderline>
        </>
    )
}

export {Demo} 