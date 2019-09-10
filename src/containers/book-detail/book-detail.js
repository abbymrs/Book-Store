import React, { Component } from 'react';
import { Button, Icon, Tabs, Input } from 'antd';

import './book-detail.less';
import Carousel from "../../components/carousel/carousel";

const { TabPane } = Tabs;

class BookDetail extends Component {

	state = {
		selectedAddress: '深圳市宝安区',
		isShowMenu: false,
		activeTab: '1'
	}
	composedAdd = '';
	componentDidMount() {
		console.log(this.props.match.params.id);
	}
	showMenu = () => {
		this.setState({
			isShowMenu: true
		});
	}
	hideMenu = () => {
		this.setState({
			isShowMenu: false
		});
	}
	selectAddress = (e) => {
		const target = e.target;
		const tabLength = document.querySelectorAll('.ant-tabs-tab').length;
		if (target.tagName === 'LI') {
			let nextTab = +this.state.activeTab + 1;
			this.composedAdd += target.textContent;
			if (nextTab > tabLength) {
				this.setState({
					isShowMenu: false,
					selectedAddress: this.composedAdd
				});
				this.composedAdd = '';
			} else {
				this.changeTab(nextTab + '');
			}
		}
	}

	changeTab = activeKey => {
		this.setState({
			activeTab: activeKey
		});
	};

	render() {
		const images = [
			{
				id: '7a7c8740-74b5-4d7e-9133-8b7755577222',
				url: 'https://img14.360buyimg.com/n1/jfs/t1/51314/12/1611/402233/5cf6099fE2c2cb837/1c5f9a5925f31b99.png',
			},
			{
				id: 'e4fcaeda-a26f-401b-ad46-fe6ef2c3a355',
				url: 'https://img14.360buyimg.com/n1/jfs/t1/60628/5/1139/223264/5cf6099bE2e0c05eb/c2576a544d2cae17.png',
			},
			{
				id: '7c938ee0-47a6-4255-a4c6-d1b23ae8ac55',
				url: 'https://img14.360buyimg.com/n1/jfs/t1/58028/1/1607/402233/5cf6099bE4e915e51/052e6287e07760b3.png',
			},
			{
				id: '77d14655-8b8d-4dfa-8b0d-d9fb40425429',
				url: 'https://img11.360buyimg.com/n1/jfs/t4900/124/2151432943/113557/7677b58b/58fa3271Nfa75f193.jpg'
			},
			{
				id: '7c938ee0-47a6-4255-a4c6-d1b23ae8ac58',
				url: 'https://img14.360buyimg.com/n1/jfs/t1/58028/1/1607/402233/5cf6099bE4e915e51/052e6287e07760b3.png',
			},
			{
				id: 'e4fcaeda-a26f-401b-ad46-fe6ef2c3a395',
				url: 'https://img14.360buyimg.com/n1/jfs/t1/60628/5/1139/223264/5cf6099bE2e0c05eb/c2576a544d2cae17.png',
			},
			{
				id: '6476b409-daa0-4209-b82a-9ac6a69f33ce',
				url: 'https://img10.360buyimg.com/n1/jfs/t1/81876/6/1040/508937/5cf479abE1eed0045/64f1d475189f8773.png'
			}
		];
		const bookDetail = {
			images: images,
			title: '前端架构设计',
			desc: '电子工业出版社博文视点品牌庆,惊喜奉送互联网专业人员阅读书单,千种好书领券享满100-40',
			author: '[美] 迈卡·高保特（Micah Godbolt） 著，潘泰燊，张鹏，许金泉 译',
			price: '$49.32',
			weight: '0.31kg',
			content: `
						前端架构是一系列工具和流程的集合，旨在提升前端代码质量，并实现高效、可持续的工作流。对于大型Web项目，前端架构师和软件架构师同样不可或缺。
						<br>本书作者通过Red Hat公司真实案例分析以及以往经验积累的实用技巧，系统总结了前端架构的四个核心，详细展示了新的前端开发准则，将Web开发提升到了一个新高度。
						<br>前端架构四个核心：
						<br>● 代码——如何实现系统架构中的HTML、CSS和JavaScript 
						<br>● 流程——构建高效并且防止出错的工作流所需要的工具和流程 
						<br>● 测试——为网站搭建稳固基础
						<br>● 文档——规划好系统设计蓝图
						<br>
						<br>前端架构师职责：
						<br>
						<br>● 体系设计——清晰描绘产品和代码的最终形态 
						<br>● 工作规划——制定完整开发工作流
						<br>● 监督跟进——保证项目高效率完成
						<div class="book-detail-content">前言 xi
							<br>第一部分　引言
							<br>第　1 章 前端架构原则　7
							<br>第　2 章 Alpha 项目　11
							<br>2．1　慢而有力的开端　11
							<br>2．2　全副武装　12
							<br>第　3 章 前端架构的核心　15
							<br>3．1　围绕四个核心工作　15
							<br>3．2　四个核心的含义　16
							<br>第二部分　代码核心
							<br>第　4 章 HTML　19
							<br>4．1　过去处理标记的方法　19
							<br>4．1．1　程序式标记：自动化程度 100%，可控程度 0%　19
							<br>4．1．2　静态标记：自动化程度 0%，可控程度 100%　20
							<br>4．2　平衡可控性和自动化　21
							<br>4．3　这一切背后的设计系统　22
							<br>4．4　模块化 CSS 理论的多面性　22
							<br>4．4．1　OOCSS 方法　23
							<br>4．4．2　SMACSS 方法　23
							<br>4．4．3　BEM 方法　24
							<br>4．5　选择适合的方案　25
							<br>第　5 章 CSS　27
							<br>5．1　特性之争与继承之痛　28
							<br>5．2　一种现代的、模块化的方法　30
							<br>5．3　其他有助益的原则　32
							<br>5．3．1　单一职责原则　32
							<br>5．3．2　单一样式来源　33
							<br>5．3．3　组件修饰符　34
							<br>5．4　小结　35
							<br>第　6 章 JavaScript　37
							<br>6．1　选择框架　37
							<br>6．2　维护整洁的 JavaScript 代码　38
							<br>6．2．1　保持代码整洁　38
							<br>6．2．2　创造可复用的函数　38
							<br>6．3　小结　40
							<br>第　7 章 Red Hat 代码　41
							<br>7．1　过多的依赖　41
							<br>7．2　严重的位置依赖问题　42
							<br>7．3　设计分解　42
							<br>7．4　组件分类　43
							<br>7．5　BB 鸟规则　44
							<br>7．6　编写你自己的规则　44
							<br>7．7　每个标签指定唯一的选择器　46
							<br>7．7．1　单一责任原则　46
							<br>7．7．2　样式只有单一的来源　47
							<br>7．7．3　可选的修饰符　47
							<br>7．7．4　可选的上下文　50
							<br>7．8　语义化的网格　53
							<br>第三部分　流程核心
							<br>第　8 章 工作流　57
							<br>8．1　过去的开发工作流　57
							<br>8．2　现代的开发工作流　58
							<br>8．2．1　需求　58
							<br>8．2．2　原型设计　58
							<br>8．2．3　程序开发　58
							<br>8．3　前端工作流　59
							<br>8．3．1　必要的工具　59
							<br>8．3．2　本地部署　59
							<br>8．3．3　编写用户故事　60
							<br>8．4　开发　61
							<br>8．5　发布　62
							<br>8．6　提交编译后的资源　62
							<br>8．7　持续集成的服务器　63
							<br>8．7．1　标签分支　64
							<br>8．7．2　究竟为什么要这么做　64
							<br>8．8　发布渠道　64
							<br>第　9 章 任务处理器　67
							<br>9．1　在任务处理器中完成一切　68
							<br>9．2　在项目中使用任务处理器　69
							<br>9．3　有明显的优胜者吗　71
							<br>第　10 章 Red Hat 流程　73
							<br>10．1　征服最后一英里　73
							<br>10．2　模式驱动的设计系统　75
							<br>第四部分　测试核心
							<br>第　11 章 单元测试　87
							<br>11．1　单元　87
							<br>11．1．1　更多重用　88
							<br>11．1．2　更好的测试　88
							<br>11．2　测试驱动的开发　88
							<br>11．3　一个测试驱动的例子　89
							<br>11．4　测试覆盖率要多大才足够　90
							<br>11．4．1　解决分歧点　90
							<br>11．4．2　从测试覆盖率开始　90
							<br>第　12 章 性能测试　91
							<br>12．1　制定性能预算　91
							<br>12．1．1　竞争基线　92
							<br>12．1．2　平均基准　92
							<br>12．2　原始指标　93
							<br>12．2．1　页面大小　93
							<br>12．2．2　HTTP 请求次数　94
							<br>12．3　计时度量　94
							<br>12．4　混合度量标准　95
							<br>12．4．1　PageSpeed 分数　95
							<br>12．4．2　Speed Index 指标　95
							<br>12．5　设置性能测试　95
							<br>12．5．1　Grunt PageSpeed 插件　96
							<br>12．5．2　Grunt Perfbuget 插件　96
							<br>12．6　小结　97
							<br>第　13 章 视觉还原测试　99
							<br>13．1　常见的质疑　99
							<br>13．1．1　不了解情况的开发者　100
							<br>13．1．2　不一致的设计　100
							<br>13．1．3　举棋不定的决策者　100
							<br>13．2　一个经过测试的解决方案　101
							<br>13．3　视觉还原测试的多面性　101
							<br>第　14 章 Red Hat 测试方法　103
							<br>14．1　实践视觉还原测试　103
							<br>14．1．1　测试工具集　103
							<br>14．1．2　设置 Grunt　104
							<br>14．1．3　测试文件　104
							<br>14．1．4　对比　105
							<br>14．1．5　运行全部测试用例　106
							<br>14．1．6　如何应对测试失败　107
							<br>14．1．7　从失败到成功　107
							<br>14．1．8　修改代码以适应需求　108
							<br>14．1．9　将基准图片放在组件目录里　108
							<br>14．1．10　独立运行每个组件的测试集　109
							<br>14．1．11　测试的可扩展性　110
							<br>14．2　小结　111
							<br>第五部分　文档核心
							<br>第　15 章 样式文档　117
							<br>15．1　配置 Hologram　117
							<br>15．1．1　Hologram 的文档注释块　119
							<br>15．1．2　Hologram 编译流程　120
							<br>15．1．3　Hologram 小结　121
							<br>15．2　SassDoc　121
							<br>15．2．1　安装 SassDoc　121
							<br>15．2．2　使用 SassDoc　122
							<br>15．2．3　探索 SassDoc　123
							<br>15．2．4　深入了解 SassDoc　124
							<br>15．2．5　内部依赖　125
							<br>15．3　小结　127
							<br>第　16 章 图形库　129
							<br>16．1　何为 Pattern Lab　129
							<br>16．2　运行 Pattern Lab　131
							<br>16．3　首页模板　133
							<br>16．4　首变量　134
							<br>16．5　原子　135
							<br>16．6　发挥原子的作用　135
							<br>第　17 章 Red Hat 文档　137
							<br>17．1　阶段 1：静态的样式文档　137
							<br>17．2　阶段 2：重写 Pattern Lab　139
							<br>17．3　阶段 3：分拆模式库和样式文档　142
							<br>17．4　阶段 4：创建统一的渲染引擎　143
							<br>17．5　阶段 5：自动创建新模式　144
							<br>第　18 章 总结　147
							<br>作者介绍　149
							<br>封面介绍　149
						</div>
						`
		};
		const getDropdownClass = () => {
			if (this.state.isShowMenu) {
				return 'block';
			} else {
				return 'address-options';
			}
		};
		const menu = (
			<Tabs activeKey={this.state.activeTab} onChange={this.changeTab} type="card" className="dropdown-tab-panel">
				<TabPane tab="Tab 1" key="1">
					<ul className="align-between" index="1" onClick={this.selectAddress}>
						<li>北京</li>
						<li>广东</li>
						<li>上海</li>
						<li>浙江</li>
					</ul>
				</TabPane>
				<TabPane tab="Tab 2" key="2">
					<ul className="align-between" index="2" onClick={this.selectAddress}>
						<li>北京</li>
						<li>广东</li>
						<li>上海</li>
						<li>浙江</li>
					</ul>
				</TabPane>
				<TabPane tab="Tab 3" key="3">
					<ul className="align-between" index="3" onClick={this.selectAddress}>
						<li>北京</li>
						<li>广东</li>
						<li>上海</li>
						<li>浙江</li>
					</ul>
				</TabPane>
			</Tabs>
		);
		return (
			<div className="detail-wrapper">
				<div className="detail-top align-vertical">
					<Carousel images={bookDetail.images} />
					<div className="detail-top-right">
						<h2>{bookDetail.title}</h2>
						<h3 className="font-sm red detail-top-desc">{bookDetail.desc}</h3>
						<div className="delivery-address-wrapper">
							<span className="dt">配送至</span>
							<div className="delivery-address"
								onMouseEnter={this.showMenu}
								onMouseLeave={this.hideMenu}>
								<Button>
									{this.state.selectedAddress}
									<Icon type="down" />
								</Button>
								<div className={getDropdownClass() + ' dropdown-panel'}>{menu}</div>
							</div>
						</div>
						<div className="detail-top-weight">
							<span className="dt">重&nbsp;&nbsp;&nbsp;&nbsp;量</span>
							<span>{bookDetail.weight}</span>
						</div>
						<div className="detail-top-actions">
							<span className="detail-top-quantity">
								<Icon type="minus" className="decrease center" />
								<Input value="1" className="quantity-num" />
								<Icon type="plus" className="increase center" />
							</span>
							<Button className="add-to-cart" type="danger">加入购物车</Button>
							<span className="add-favorite"><Icon type="heart" />关注</span>
						</div>
					</div>
				</div>
				<div className="book-detail-content">
					<h2 className="book-detail-title">商品详情</h2>
					<div dangerouslySetInnerHTML={{ __html: bookDetail.content }}></div>
				</div>
			</div>
		);
	}
}
export default BookDetail;