import React,{propTypes} from 'react';
const Foo = () => <h1>Hello World...!</h1>;

const Foo2 = ({children}) =>
	<div className="Foo">
		<span className="bar">bar</span>
		{children}
		<span className="bar">bar</span>
	</div>;

Foo2.propTypes = {
	children: React.Component
};
export default Foo
export {
	Foo,
	Foo2
}

