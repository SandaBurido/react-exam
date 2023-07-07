// import {IconMenu} from '../../components/IconMenu';
// import {IconMemo} from '../../components/IconMemo';
// import {IconChallenge} from '../../components/IconChallenge';
// import {IconInfo} from '../../components/IconInfo';
// import {InfoCount} from '../../components/InfoCount';
// import theme from '../../theme';
import style from "../styles/styles.scss";

function Header() {
  return (
    <div className="root">
      <div className="___16" style={{'display': 'flex'}}>
        <img className="img_logo" src="../logo.svg"></img>
        
        <div className="naviMemo">
          <div className=".___49" />
          <img src="../icon/icon_memo.svg"></img>
          <span className="._____">自分の記録</span>
        </div>
        <div className="naviMemo2">
          <img src="../icon/icon_challenge.svg"></img>
          <span className="_____2">チャレンジ</span>
        </div>
        <div className="naviMemo3">
          <img src="../icon/icon_info.svg"></img>
          <span className="____">お知らせ</span>
        </div>
        <img src="../icon/icon_menu.svg"></img>
      </div>
    </div>
  );
}

export default Header;
