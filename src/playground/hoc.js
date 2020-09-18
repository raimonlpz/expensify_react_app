// higher order component (HOC) - A component (HOC) that renders another component (regular component)
// reuse code
// hijacking
// prop manipulation
// abstract state
import React from 'react'
import ReactDOM from 'react-dom'

// const Info = (props) => (
//     <div>
//         <h1>HOC info</h1>
//         <p>This is some info about {props.info}</p>
//     </div>
// )

// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             {props.isAdmin && <p>This is private info. Please don't share</p>}
//             <WrappedComponent {...props} />
//         </div>
//     )
// }
// const AdminInfo = withAdminWarning(Info)
// ReactDOM.render(<AdminInfo isAdmin={false} info="HOC component" />, document.getElementById('app'))

const Info = (props) => (
    <div>
        <p>{props.info}</p>
    </div>
)

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please log in to see the message...</p>}
        </div>
    )
}

const AuthInfo = requireAuthentication(Info)
//console.log(AuthInfo)
ReactDOM.render(<AuthInfo isAuthenticated={false} info="This is an OnlyFans page" />, document.getElementById('app'))


