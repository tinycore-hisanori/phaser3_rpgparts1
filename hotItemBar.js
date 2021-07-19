class hotItemBar {
  constructor(that, itemWidth, itemHeight, itemMaxCount) {
    this.itemScene_ = that;
    this.hotBarWidth_ = (itemWidth + 2) * itemMaxCount;
    this.hotBarHeight_ = itemHeight + 4;
    this.itemBkground_ = this.itemScene_.add.rectangle(
      400, //X
      (this.hotBarHeight_ + 10) / 2, //Y
      this.hotBarWidth_,
      this.hotBarHeight_,
      0xaaeeff
    );
    this.itemBkground_.visible = true;
  }

  show() {
    this.itemBkground_.visible = true;
  }
}
