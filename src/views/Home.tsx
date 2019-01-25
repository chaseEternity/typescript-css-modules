import {Component, Provide, Vue} from 'vue-property-decorator';
import {CreateElement} from 'vue';
// import * as homeStyle from './home.module.scss';
@Component({})
export default class Home extends Vue {
  private render(h: CreateElement) {
    return (
      <div >
        <img src={require('../assets/logo.png')}/>
        <div msg={'Welcome to Your Vue.js + TypeScript App'}/>
      </div>
    );
  }
}
