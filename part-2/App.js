const App = () => {
    return (
        <div>
            <Tweet username="Papy" name="Papyrus" date="Jun 23" message="Nyeh heh heh!" />
            <Tweet username="sans" name="Sans" date="Jun 22" message="Get Dunked On!" />
            <Tweet username="Doggeh" name="Toby" date="Jun 20" message="Arf Arf Arf!" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));