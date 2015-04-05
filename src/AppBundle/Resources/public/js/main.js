/**
 * Created by shkumbin on 4/5/15.
 */
var React = require('react');

var TaskList = React.createClass({

    deleteTask: function () {
        this.props.task.delete();
    },

    render: function() {
        var displayTask = (task, i) => <li onClick={this.deleteTask}>{task}</li>;
        return (
            <ul>
                { this.props.items.map(displayTask) }
            </ul>
        );
    }

});

var TaskApp = React.createClass({

    getInitialState: function() {
        return {
            items: [],
            task: ''
        }
    },

    onChange: function(e) {
        var task = e.target.value;
        this.setState( { task } );
    },

    addTask: function(e) {
        var items = this.state.items.concat([this.state.task]);
        var task = '';
        this.setState({ items, task });

        e.preventDefault();
    },

    render: function() {

        return (
            <div>
                <h1>My Tasks</h1>
                <TaskList items={this.state.items} />

                <form onSubmit={this.addTask}>
                    <input onChange={this.onChange} value={this.state.task} />
                    <button>Add Task</button>
                </form>
            </div>
        );

    }

});

React.render(<TaskApp />, document.body);