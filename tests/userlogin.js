import test from "ava"
import { renderJSX, JSX } from 'jsx-test-helpers';
import React from "react"
import { Foo, Foo2 } from "../userlogin"
test('renders  passed in', t => {
	const actual = renderJSX(
		<Foo />
	);
	const expected = JSX(
		<h1>Hello World...!</h1>
	);
	t.is(actual, expected);
});

test('renders children when passed in', t => {
	const actual = renderJSX(
		<Foo2>
			<div>demo content</div>
		</Foo2>
	);
	const expected = JSX(
		<div className="Foo">
			<span className="bar">bar</span>
			<div>demo content</div>
			<span className="bar">bar</span>
		</div>
	);
	t.is(actual, expected);
});