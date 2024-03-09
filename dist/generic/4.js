/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
class Component {
    constructor(props) {
        this.props = props;
    }
}
class Page extends Component {
    pageInfo() {
        console.log(this.props.title);
    }
}
const title = new Page({ title: "Hello!" });
title.pageInfo();
export {};
//# sourceMappingURL=4.js.map