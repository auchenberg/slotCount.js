(function(root) {
    'use strict';

    var slotCount = function(elmContainer, count) {
        this._onTransitionEnd = this._onTransitionEnd.bind(this);
        this.elmContainer = elmContainer;
        this.count = count;

        this._render();
    };

    slotCount.prototype = {

        dispose: function() {
            this._removeCount();
            this.elmContainer.removeChild(this.elmCounter);
        },

        set: function(newCount) {

            var hasChanged = newCount !== this.count;

            if (!hasChanged) {
                return;
            }

            var hasDecremented = newCount < this.count;

            this._removeCount();
            this._buildCount(this.count, newCount);

            if (hasDecremented) {
                this.elmCount.classList.add('reset');
                this.elmCount.style.marginTop = this.lineHeight * -2;
            }

            setTimeout(function() {
                this.elmCount.classList.remove('reset');
                this.elmCount.addEventListener('transitionend', this._onTransitionEnd, false);
                this.elmCount.style.marginTop = this.lineHeight * -1;
            }.bind(this), 20); // Wait 20ms before Firefox clears the transition.

            this.count = newCount;

            return this;
        },

        _render: function() {
            this.elmCounter = document.createElement('div');
            this.elmCounter.classList.add('slot-count');
            this.elmContainer.appendChild(this.elmCounter);

            this._renderStaticCount();
        },

        _renderStaticCount: function() {
            this._removeCount();
            this._buildCount(this.count);

            if(!this.lineHeight) {
                this.lineHeight = parseInt(document.defaultView.getComputedStyle(this.elmCount, '').getPropertyValue('line-height'), 10);
            }
        },

        _buildCount: function(count, newCount) {
            var elmCount = document.createElement('div');
            elmCount.classList.add('count');
            var html = count;

            if (newCount !== undefined) {
                html += '</br>' + newCount + '</br>' + count + '</br>';
            }

            elmCount.innerHTML = html;

            this.elmCount = this.elmCounter.appendChild(elmCount);
        },

        _removeCount: function() {
            if (this.elmCount) {
                this.elmCount.removeEventListener('transitionend', this._onTransitionEnd);
                this.elmCounter.removeChild(this.elmCount);
            }
        },

        _onTransitionEnd: function() {
            this._renderStaticCount();
        }

    };

    if (typeof define === 'function' && define.amd) {
        define(slotCount);
    } else if (typeof exports === 'object') {
        module.exports = slotCount;
    } else {
        root.slotCount = slotCount;
    }

})(this);
