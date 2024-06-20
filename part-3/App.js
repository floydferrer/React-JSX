const App = () => {
    return (
        <div>
            <Person name="Da Great Papyrus" age="19" hobbies={['Hunting Humans', 'Cooking Spaghetti', 'Making Puns']}/>
            <Person name="Sans" age="17" hobbies={['Dunking on People', 'Playing Trombone', 'Eating Ketchup']}/>
            <Person name="Toby" age="3" hobbies={['Sleeping', 'Stealing Bones', 'Playing Maracas']}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));