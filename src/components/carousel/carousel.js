import React, { Component } from 'react';
import { Carousel, Icon } from 'antd';
import './carousel.less';

export default class Slider extends Component {

	constructor(props) {
		super(props);
		this.carousel = React.createRef();
		this.imageWrapper = React.createRef();
		this.subImgWidth = 60;
		this.subImgMargin = 10;
		this.left = 0;

		this.previous = this.previous.bind(this);
		this.next = this.next.bind(this);
		this.goTo = this.goTo.bind(this);
		this.focusActive = this.focusActive.bind(this);
	}
	componentDidMount() {
		const ul = this.imageWrapper;
		ul.querySelectorAll('.sub-carousel li')[0].classList.add('red-border');
		ul.style.width = this.props.images.length * (this.subImgWidth + this.subImgMargin) + 'px';
	}
	goTo(key) {
		this.carousel.goTo(key);
	}
	previous() {
		this.updateSlider(false);
	}
	next() {
		this.updateSlider(true);
	}
	updateSlider(isNext) {
		const ul = this.imageWrapper;
		const left = parseInt(getComputedStyle(ul, null).left);
		const subImgTotalWidth = this.subImgWidth + this.subImgMargin;

		if (isNext) {
			if (Math.abs(left) === (this.props.images.length - 4) * subImgTotalWidth) return;
			this.left -= subImgTotalWidth;
		} else {
			if (left >= 0) return;
			this.left += subImgTotalWidth;
		}

		ul.style.left = this.left + 'px';
	}
	focusActive(e) {
		const target = e.target;
		if (target.tagName === 'LI') {
			const lis = target.parentElement.querySelectorAll('li');
			const index = +target.getAttribute('index');
			Array.from(lis).forEach(li => {
				li.classList.remove('red-border');
			});
			target.classList.add('red-border');
			this.goTo(index);
		}
	}
	render() {
		const images = this.props.images;
		const props = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<div className="carousel-wrapper">
				<Carousel ref={node => (this.carousel = node)} {...props}>
					{images.map(img => (
						<div key={img.id} className="slider center">
							<img src={img.url} alt="slider" />
						</div>
					))}
				</Carousel>
				<div className="sub-carousel-wrapper">
					<Icon type="left" className="left-arrow" onClick={this.previous} />
					<div className="sub-carousel-content">
						<ul className="sub-carousel clearfix" ref={node => (this.imageWrapper = node)}>
							{images.map((img, key) => (
								<li key={img.id}
									index={key}
									onClick={this.goTo.bind(this, key)}
									className="center sub-image"
									onMouseEnter={this.focusActive}>
									<img src={img.url} alt="slider" />
								</li>
							))}
						</ul>
					</div>
					<Icon type="right" className="right-arrow" onClick={this.next} />
				</div>
			</div >
		);
	}
}


