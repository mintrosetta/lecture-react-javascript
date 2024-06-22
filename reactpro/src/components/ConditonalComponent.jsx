import Welcome from './Welcom';
import Code from './Code';

export default function ConditionalComponent() {
    const display = false;

    let message = (display) ? <Welcome /> : <Code />;

    return message;
}
