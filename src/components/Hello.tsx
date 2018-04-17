import * as React from "react";

export interface IHelloProps { compiler: string; framework: string; }

// 'HelloProps'는 props의 형태을 만듭니다.
// state가 설정되어 있지 않아 '{}'타입을 사용합니다.
export const Hello: React.SFC<IHelloProps> = ({ compiler, framework }) => (
    <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
);