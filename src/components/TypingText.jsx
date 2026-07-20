import { ReactTyped } from "react-typed";

const MyComponent = () => (
    <div>
        <ReactTyped strings={["i'm👌"]} typeSpeed={40} />
        <br />

        <ReactTyped
            strings={[
                "Analytic Data",
                "Data Engineer",
                "Frontend Developer",
                "Fullstack Developer",
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