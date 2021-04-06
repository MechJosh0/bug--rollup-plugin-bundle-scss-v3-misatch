import { DefineComponent, Plugin } from 'vue';


declare const Foobar: Exclude<Plugin['install'], undefined>;
export default Foobar;

export const FoobarSample: DefineComponent<{}, {}, any>;
