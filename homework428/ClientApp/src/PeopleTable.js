import React from 'react';
import PersonRow from './PersonRow';
import PersonForm from './PersonForm';

class PeopleTable extends React.Component {


    state = {
        firstName: '',
        lastName: '',
        age: '',
        persons: []

    }
    onFirstNameChange = e => {
        this.setState({ firstName: e.target.value });
    }
    onLastNameChange = e => {
        this.setState({ lastName: e.target.value });
    }
    onAgeChange = e => {
        this.setState({ age: e.target.value });
    }

    onAddClick = () => {

        const { persons } = this.state;
        const personsCopy = [{ firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age }, ...persons];

        this.setState({ persons: personsCopy, firstName: '', lastName: '', age: '' });

    };
    onClearClick = () => {

        const emptyArr = [];
        this.setState({ persons: emptyArr, firstName: '', lastName: '', age: '' });

    };


    render() {
        return (


            <div className='container'>
                <div className='row'>
                    <PersonForm onAddClick={this.onAddClick} onClearClick={this.onClearClick} onFirstNameChange={this.onFirstNameChange}
                        onLastNameChange={this.onLastNameChange} onAgeChange={this.onAgeChange}
                        firstName={this.state.firstName} lastName={this.state.lastName} age={this.state.age} />
                </div>
                <div className='row'>
                    <table className="table table-bordered table-striped table-hover" >
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            <PersonRow persons={this.state.persons} />
                        </tbody>
                    </table>

                </div>
            </div>

        )
    }
}
export default PeopleTable;