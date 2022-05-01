import React from 'react';

class PersonRow extends React.Component {

    generateTr = (person) => {
        let classNames = '';
        if (person.age>65) {
            classNames += ' bg-danger';
        }
        return <tr className={classNames}>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.age}</td>
        </tr>
    }

    render() {
        const { persons } = this.props;
        if (persons.length === 0) {
            return <h1 className='justify-content-center'>No person added. Be the first!</h1>
        }
        else {
              return persons.map(p => this.generateTr(p))
        }
         
        

    }
}

export default PersonRow;