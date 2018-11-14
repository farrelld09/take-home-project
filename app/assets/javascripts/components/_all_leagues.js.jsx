const AllLeagues = (props) => {
    const leagues = props.leagues.map((league) => {
        return (
          <div key={league.id}>
            <h1>Name: {league.name}</h1>
            <p>Price ${league.price}.00</p>
          </div>
        )
      })
    return (
        <div>
        {leagues}
        </div>
    )
}