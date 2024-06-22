import Welcome from './Welcom';
import Code from './Code';

export default function ConditionalComponent() {
    const display = false;

    let message = null;

    if (display) {
        message = <h1>This is message 1</h1>;
    } else {
        message = <h1>This is message 2</h1>;
    }

    return message;
}
