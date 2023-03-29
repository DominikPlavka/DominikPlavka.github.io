const Heading = ({heading, input}) => {

    const HeadingSize = "h" + heading;

    if (heading < 1) {
        return (
            <h1>{input}</h1>
        )
    }

    if (heading > 6) {
        return (
            <h6>{input}</h6>
        )
    }

    return (
        <HeadingSize>{input}</HeadingSize>
    )
};

export default Heading;