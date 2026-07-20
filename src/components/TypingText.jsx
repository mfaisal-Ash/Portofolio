import { ReactTyped } from "react-typed";

const MyComponent = () => (
    <div>
        <ReactTyped strings={["i'm👌"]} typeSpeed={40} />
        <br />

        <ReactTyped
            strings={[
                "Analytic Data",
                "Data Engineer",
<<<<<<< HEAD
                "Frontend Developer",
                "Fullstack Developer",
=======
                "Backend",
>>>>>>> ba430f312b1dfd8b6da0edee7f21b43a47512834
            ]}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
            loop
            style={{backgroundColor: 'transparent'}}
            className="!bg-transparent"
        >
            <input type="text" className="bg-transparent"/>
        </ReactTyped>
    </div>
);

export default MyComponent;