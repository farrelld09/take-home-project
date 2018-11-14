class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          leagues: [],
          searchLat: 0,
          searchLong: 0,
          budget: 0,
          radius: 0,
          name: '',
          latitude: 0,
          longitude: 0,
          price: 0
        };

        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onCreate = this.onCreate.bind(this);
        this.onSearchLatChange = this.onSearchLatChange.bind(this);
        this.onSearchLongChange = this.onSearchLongChange.bind(this);
        this.onBudgetChange = this.onBudgetChange.bind(this);
        this.onRadiusChange = this.onRadiusChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onLatitudeChange = this.onLatitudeChange.bind(this);
        this.onLongitudeChange = this.onLongitudeChange.bind(this);
        this.onPriceChange = this.onPriceChange.bind(this);
      }

    onSearchLatChange (event) {
        this.setState({ searchLat: event.target.value })  
    }
    
    onSearchLongChange (event) {
        this.setState({ searchLong: event.target.value })  
    }

    onBudgetChange (event) {
        this.setState({ budget: event.target.value })  
    }

    onRadiusChange (event) {
        this.setState({ radius: event.target.value });
    }
    
    onNameChange (event) {
        this.setState({ name: event.target.value })
    }

    onLatitudeChange (event) {
        this.setState({ latitude: event.target.value })
    }

    onLongitudeChange (event) {
        this.setState({ longitude: event.target.value })
    }

    onPriceChange (event) {
        this.setState({ price: event.target.value })
    }

    onSearchSubmit (event) {
        event.preventDefault()
        fetch(`/api/v1/leagues?lat=${this.state.searchLat}&long=${this.state.searchLong}&budget=${this.state.budget}&radius=${this.state.radius}`)
          .then((response) => {return response.json()})
          .then((data) => {this.setState({ leagues: data }) });
    }

    onCreate(event) {
    event.preventDefault()
    let league = {
      name: this.state.name,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      price: this.state.price
    }
   
    fetch(`/api/v1/leagues`, {
        credentials: 'same-origin',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(league)
      }).then((response) => {return response.json()})
    }

    render () {
        return (
          <div>
            <h3>Search for Leagues</h3>
            <form onSubmit={this.onSearchSubmit}>
                <label>Latitude </label>
                <input type="number" onChange={this.onSearchLatChange} value={this.state.searchLat}></input><br/>
                <label>Longitude </label>
                <input type="number" onChange={this.onSearchLongChange} value={this.state.searchLong}></input><br/>
                <label>Radius </label>
                <input type="number" onChange={this.onRadiusChange} value={this.state.radius}></input><br/>
                <label>Budget </label>
                <input type="number" onChange={this.onBudgetChange} value={this.state.budget}></input>
                <input type="submit" value="Submit"/>
            </form>
            <h3>Create League</h3>
            <form onSubmit={this.onCreate}>
                <label>Name </label>
                <input type="text" onChange={this.onNameChange} value={this.state.name}></input><br/>
                <label>Latitude </label>
                <input type="number" onChange={this.onLatitudeChange} value={this.state.latitude}></input>
                <label>Longitude </label>
                <input type="number" onChange={this.onLongitudeChange} value={this.state.longitude}></input>
                <label>Price </label>
                <input type="number" onChange={this.onPriceChange} value={this.state.price}></input>
                <input type="submit" value="Submit"/>
            </form>
            <AllLeagues leagues={this.state.leagues} />
          </div>
        )
      }
    }