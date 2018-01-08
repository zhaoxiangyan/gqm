/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 *
 * Requires: 1.2.2+
 */

// Copyright (c) 2010 Robert Kieffer

// Dual licensed under the MIT and GPL licenses.

/**
The MIT License (MIT)

Copyright (c) 2010-2014 Wandenberg Peixoto <wandenberg@gmail.com>, Rogério Carvalho Schneider <stockrt@gmail.com>

This file is part of Nginx Push Stream Module.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

pushstream.js

Created: Nov 01, 2011
Authors: Wandenberg Peixoto <wandenberg@gmail.com>, Rogério Carvalho Schneider <stockrt@gmail.com>
 */

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright В© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright В© 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

define("elements/VideoSchedule/CoursesListHelper", ["underscore", "vendors/Backbone/Mixin"], function(e, t) {
	var n = new t({
		prepareCoursesList: function(e) {
			var t = e,
				n = document.createDocumentFragment();
			for (var r = 0; r < t.length; r++) {
				var i = new Date;
				if (t[r].end_time * 1e3 < i.getTime()) continue;
				var s = document.createElement("li"),
					o = {
						start_time: t[r].start_time * 1e3,
						end_time: t[r].end_time * 1e3,
						chat_start: t[r].chat_start * 1e3,
						chat_stop: t[r].chat_stop * 1e3
					},
					u = this._prepareCourseDate(o),
					a = new Date(t[r].start_time),
					f = new Date(t[r].end_time),
					l = "/data/media/course/" + t[r].ftp_dir + "/" + lang + "/" + t[r].preview,
					c = "/data/media/course/" + t[r].ftp_dir + "/" + lang + "/" + t[r].thumbnail,
					h = t[r].teacher_name,
					p = "slider__item_type_reminder",
					d = "stream__slider-course_type_reminder",
					v = '<a href="#" class="popup-link stream__remind js-remind">' + PLAYER_PLAYLIST.remind + "</a>",
					m = "";
				t[r].start_time * 1e3 <= Date.now() && (v = "", p = "slider__item_type_play", d = "stream__slider-course_type_play", m = '<li class="stream__list stream__list_type_online">' + PLAYER_PLAYLIST.broadcast_now + "</li>", m += '<li class="stream__list stream__list_type_chat"><a href="/' + lang + "/school/broadcast/" + t[r].timetable + '/">' + PLAYER_PLAYLIST.teacher_chat + "</a></li>"), s.className = "slider__item  " + p, s.setAttribute("data-timetable", t[r].timetable), s.setAttribute("data-session-id", t[r].session_id), s.setAttribute("data-chat-start", t[r].chat_start), s.setAttribute("data-chat-stop", t[r].chat_stop), s.setAttribute("data-start-time", t[r].start_time), s.setAttribute("data-end-time", t[r].end_time), s.setAttribute("data-stream-path", t[r].stream_path), s.setAttribute("data-stream-name-m", t[r].stream_name_m), s.setAttribute("data-stream-name-h", t[r].stream_name_h), s.setAttribute("data-broadcast-url", ""), s.setAttribute("data-required-auth", t[r].stream_name_m), s.setAttribute("data-stream-url-hls", t[r].chat_settings.hls_mid), s.setAttribute("data-stream-url-dash", t[r].chat_settings.dash_mid), s.setAttribute("data-course-name", t[r].fullname), s.setAttribute("data-course-time", u), s.setAttribute("data-course-teacher", h), s.setAttribute("data-src", l), s.setAttribute("data-course-id", t[r].course_id), s.innerHTML = '<div class="stream__slider-course ' + d + '">' + '<div class="stream__slider-category stream__slider-category_type_' + t[r].course_category_id + '"><span class="stream__slider-category-title">' + t[r].course_category + "</span></div>" + '<img class="stream__slider-course_type_reminder" src="' + c + '" width="230" height="135" alt="">' + "</div>" + '<p class="s_mb_9 text_size_14"><strong>' + u + " </strong>" + v + "</p>" + '<ul class="list s_mb_9">' + '<li class="stream__list stream__list_type_teacher"><a href="/ru/school/teachers/">' + h + "</a></li>" + m + "</ul>" + '<div class="s_mb_18">' + t[r].fullname + "</div>", n.appendChild(s)
			}
			if (t.length == 0) for (var r = 0; r < 4; r++) {
				var s = document.createElement("li");
				s.className = "slider__item  " + p, s.innerHTML = '<img src="/img_new/interface/stream/stream__not-avalible-course.png" width="230" height="252" alt="">', n.appendChild(s)
			}
			return n
		},
		_prepareCourseDate: function(e) {
			var t = new Date,
				n = new Date(e.start_time),
				r = new Date(e.end_time),
				i = "";
			return n.getUTCDate() == t.getUTCDate() ? i = PLAYER_PLAYLIST.time.replace("%start_time%", this._datePartFormat(n.getHours(), 2) + ":" + this._datePartFormat(n.getMinutes(), 2)).replace("%end_time%", this._datePartFormat(r.getHours(), 2) + ":" + this._datePartFormat(r.getMinutes(), 2)) : i = PLAYER_PLAYLIST.date_time.replace("%date%", this._datePartFormat(n.getUTCDate(), 2) + "." + this._datePartFormat(n.getMonth() + 1, 2)).replace("%time%", this._datePartFormat(n.getHours(), 2) + ":" + this._datePartFormat(n.getMinutes(), 2)), i
		},
		_datePartFormat: function(e, t) {
			return ("" + e).length >= t ? e : ((new Array(t)).join("0") + e).slice(-length)
		}
	});
	return n
}), define("elements/Timer/AbstractTimer", ["underscore", "BackboneX"], function(e, t) {
	var n = t.View.extend({
		_initProperties: function() {
			this._super(), this._nextTickTimeoutId = null, this._currentClientTime = 0, this._startClientTime = 0, this._STEP = 1e3
		},
		start: function() {
			return this._startClientTime = this._currentClientTime = Date.now(), this._tick(), this
		},
		_tick: function(e) {
			clearTimeout(this._nextTickTimeoutId), this.trigger("tick");
			if (this._isTimerEnded()) {
				this.trigger("end");
				return
			}
			e = e || 0, this._nextTickTimeoutId = setTimeout(this._onTick, this._STEP - e)
		},
		_isTimerEnded: function() {
			return !1
		},
		_onTick: e.method.bind(function() {
			var e = Date.now(),
				t = (e - this._currentClientTime) % 100;
			this._currentClientTime = e, this._tick(t)
		}),
		stop: function() {
			clearTimeout(this._nextTickTimeoutId)
		}
	});
	return n
}), define("elements/Timer/TimerClockView", ["moment", "./AbstractTimer"], function(e, t) {
	var n = t.extend({
		_initProperties: function() {
			this._super(), this._startTime = 0, this._$clock = this.$el, this._timeZone = this.options.timeZone ? this.options.timeZone : !1
		},
		initialize: function() {
			this._super(), this._data.currentTime && this.start(this._data.currentTime)
		},
		start: function(e) {
			return this._startTime = e * 1e3, this._super()
		},
		_tick: function(e) {
			this.render(this._startTime + this._currentClientTime - this._startClientTime), this._super(e)
		},
		render: function(t) {
			var n = e(t),
				r = n.seconds();
			return (!r || !arguments.length) && this.trigger("minute", n), n = this._getFormatDate(n), this._$clock.text(n), this
		},
		_getFormatDate: function(e) {
			return this._timeZone ? e.utcOffset(this._timeZone).format("HH:mm:ss") : e.format("HH:mm:ss")
		}
	});
	return n
}), function(e) {
	function r(t) {
		var n = t || window.event,
			r = [].slice.call(arguments, 1),
			i = 0,
			s = !0,
			o = 0,
			u = 0;
		return t = e.event.fix(n), t.type = "mousewheel", n.wheelDelta && (i = n.wheelDelta / 120), n.detail && (i = -n.detail / 3), u = i, n.axis !== undefined && n.axis === n.HORIZONTAL_AXIS && (u = 0, o = -1 * i), n.wheelDeltaY !== undefined && (u = n.wheelDeltaY / 120), n.wheelDeltaX !== undefined && (o = -1 * n.wheelDeltaX / 120), r.unshift(t, i, o, u), (e.event.dispatch || e.event.handle).apply(this, r)
	}
	var t = ["DOMMouseScroll", "mousewheel"];
	if (e.event.fixHooks) for (var n = t.length; n;) e.event.fixHooks[t[--n]] = e.event.mouseHooks;
	e.event.special.mousewheel = {
		setup: function() {
			if (this.addEventListener) for (var e = t.length; e;) this.addEventListener(t[--e], r, !1);
			else this.onmousewheel = r
		},
		teardown: function() {
			if (this.removeEventListener) for (var e = t.length; e;) this.removeEventListener(t[--e], r, !1);
			else this.onmousewheel = null
		}
	}, e.fn.extend({
		mousewheel: function(e) {
			return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
		},
		unmousewheel: function(e) {
			return this.unbind("mousewheel", e)
		}
	})
}(jQuery), define("vendors/jquery/plugins/jquery.mousewheel", function() {}), define("global/elements/Slider/Slider", ["underscore", "jquery", "BackboneX", "global/elements/DragAndDrop/Dragging", "vendors/jquery/plugins/jquery.mousewheel"], function(e, t, n, r) {
	var i = 150,
		s = n.View.mix(r).extend({
			_classes: function() {
				return e.defaults({
					disabled: "slider__control_disabled_yes",
					visibilityHidden: "s_visibility_hidden"
				}, this._super())
			},
			_selectors: function() {
				var t = ".slider__list",
					n = e.defaults({
						content: ".slider__content",
						list: t,
						next: ".slider__control_side_right",
						prev: ".slider__control_side_left",
						slide: e("%s > .slider__item").s(t),
						movingElement: ""
					}, this._super());
				return n
			},
			events: function() {
				var e = this._super();
				return e["click " + this._selector("prev")] = this._onPrevClick, e["click " + this._selector("next")] = this._onNextClick, e.keydown = this._onKeyDown, this._wheel && (e.mousewheel = this._onMouseWheel), e
			},
			_onKeyDown: function(e) {
				switch (e.which) {
				case this._KEYS.LEFT:
					this.prev();
					return;
				case this._KEYS.RIGHT:
					this.next();
					return
				}
			},
			_initProperties: function() {
				this._super(), this._MIN_MOVE_X = 15, this._step = this._data.step || 1, this._animationDelay = typeof this._data.animationDelay != "undefined" ? this._data.animationDelay : i, this._easing = this._data.easing || "swing", this._cycle = this._data.cycle || !1, this._wheel = typeof this._data.wheel == "undefined", this._current = 0, this._previous = 0, this._last = this._elem("slide").length - 1, this._checkAbilitySlide = this._last >= this._getCapacity(), this._preventMove = !1
			},
			initialize: function() {
				this._super(), this._cycle && this._initCycle(), this._updateSlidesVisibility(), this._checkAbilitySlide || this._disableControls()
			},
			_onMouseWheel: function(e, t) {
				if (!t) return;
				if (t < 0) {
					var n = this._getCapacity();
					this._current + n - 1 < this._last && (this.next(), e.preventDefault());
					return
				}
				this._current > 0 && (this.prev(), e.preventDefault())
			},
			_initCycle: function() {
				var e = this._getCapacity(),
					t = document.createDocumentFragment(),
					n = document.createDocumentFragment();
				for (var r = 0; r < e; r++) t.appendChild(this._elem("slide").eq(r).clone()[0]);
				for (r = this._last - e + 1; r <= this._last; r++) n.appendChild(this._elem("slide").eq(r).clone()[0]);
				this._elem("list").prepend(n).append(t), this._dropElemCache("slide"), this._current = e, this._last = this._elem("slide").length - 1, this._moveToSlide(e, 0)
			},
			_updateSlidesVisibility: e.method.debounce(function() {
				var e = this._current,
					n = this._getCapacity() + e,
					r = this._class("visibilityHidden");
				this._elem("slide").each(function(i, s) {
					t(s).toggleClass(r, i < e || i >= n)
				})
			}, i, !0),
			_prepareSlidesToAnimation: function() {
				var e = this._elem("slide"),
					t = this._class("visibilityHidden"),
					n, r;
				if (this._previous < this._current) {
					var i = this._getCapacity();
					n = this._previous + i, r = this._current + i
				} else n = this._current, r = this._previous;
				for (var s = n; s <= r; s++) e.eq(s).removeClass(t)
			},
			_onSlideAnimationEnd: e.method.bind(function() {
				this._updateSlidesVisibility()
			}),
			_onPrevClick: function() {
				this.prev()
			},
			_onNextClick: function() {
				this.next()
			},
			prev: function() {
				if (this._checkAbilitySlide) return this._setSlide(this._current - this._step), this
			},
			next: function() {
				if (this._checkAbilitySlide) return this._setSlide(this._current + this._step), this
			},
			_setSlide: function(e) {
				if (this._current === e) return;
				this._previous = this._current, this._current = e, this._checkCurrentSlideAndControls(), this._moveToSlide()
			},
			_moveToSlide: function(e, t) {
				e = typeof e != "undefined" ? e : this._current, t = typeof t != "undefined" ? t : this._animationDelay;
				var n = -(e * this._getSlideWidth());
				this._prepareSlidesToAnimation();
				var r = {};
				r[window.rtl ? "right" : "left"] = n, this._elem("list").stop(!0, !0).animate(r, t, this._easing, this._onSlideAnimationEnd)
			},
			_checkCurrentSlideAndControls: function() {
				if (this._checkAbilitySlide) {
					var e = this._getCapacity();
					if (this._cycle) {
						var t = this._current < 0,
							n = this._current + e > this._last;
						if (t || n) {
							t ? this._current = this._last - e * 2 : n && (this._current = e);
							var r = this._current;
							this._previous < this._current ? r += 1 : this._previous > this._current && (r -= 1), this._moveToSlide(r, 0)
						}
					} else this._current <= 0 ? (this._current = 0, this._addClass("disabled", "prev"), this._removeClass("disabled", "next")) : this._current + e - 1 >= this._last ? (this._current = this._last - e + 1, this._addClass("disabled", "next"), this._removeClass("disabled", "prev")) : this._enableControls()
				}
			},
			_getSlideWidth: e.method.once(function() {
				return this._elem("slide").outerWidth(!0)
			}),
			_getCapacity: e.method.once(function() {
				return Math.ceil(this._elem("content").width() / this._getSlideWidth())
			}),
			_enableControls: function() {
				this._removeClass("disabled", "next"), this._current > 0 && this._removeClass("disabled", "prev")
			},
			_disableControls: function() {
				this._addClass("disabled", "next"), this._addClass("disabled", "prev")
			},
			_move: function(e, t, n) {
				if (this._preventMove) return;
				if (Math.abs(n) < this._MIN_MOVE_X) return;
				this._preventMove = !0;
				if (window.rtl) {
					this[n > 0 ? "next" : "prev"]();
					return
				}
				this[n < 0 ? "next" : "prev"]()
			},
			_endMoving: function() {
				this._preventMove = !1
			},
			_updateCheckAbilitySlide: function() {
				this._last = this._findElem("slide").length - 1, this._checkAbilitySlide = this._last >= this._getCapacity(), this._checkAbilitySlide ? this._enableControls() : this._disableControls()
			},
			getCurrent: function() {
				return this._current
			},
			updateSliderProperties: function() {
				this._updateCheckAbilitySlide();
				var e = this._getCapacity() - 1;
				return this._checkAbilitySlide ? this._current + e > this._last && (this._setSlide(this._last - e), this._checkCurrentSlideAndControls()) : this._setSlide(0), this
			}
		});
	return s
}), define("elements/VideoSchedule/CoursesList", ["jquery", "underscore", "BackboneX", "Modernizr", "global/elements/Slider/Slider", "global/elements/ServiceManager/WithServiceManager", "./CoursesListHelper"], function(e, t, n, r, i, s, o) {
	var u = n.View.mix(s, o).extend({
		_selectors: function() {
			return t.defaults({
				coursesList: ".js-school-schedule",
				course: ".slider__item",
				link: "a",
				sliderList: ".js-school-schedule .slider__list",
				slider: ".slider"
			}, this._super())
		},
		_classes: function() {
			return t.defaults({
				selectedCourse: "slider__item_selected_yes",
				pausedCourse: "slider__item_paused_yes",
				scheduledCourse: "js-remind",
				playableCourse: "slider__item_type_play",
				reminderCourse: "stream__slider-course_type_reminder",
				streamSliderCourse: "stream__slider-course"
			}, this._super())
		},
		events: function() {
			var e = this._super();
			return e["click " + this._selector("course")] = this._onCourseClick, e
		},
		_initProperties: function() {
			this._super(), this._coursesUrl = this._elem("coursesList").data("url"), this._$currentCourse = null, this._active = !0
		},
		initialize: function() {
			this._super(), this._initSlider()
		},
		_initSlider: function() {
			this._slider = new i({
				el: this._elem("slider")
			})
		},
		getCurrentCourse: function() {
			return this._$currentCourse
		},
		update: function(e) {
			var t = +e;
			return this._refreshCoursesList(t), this._sendRequestTime = Date.now(), this._lastUpdateTime = t, this._sendCoursesListRequest(), this
		},
		_sendCoursesListRequest: function() {
			e.ajax({
				url: this._coursesUrl,
				success: this._updateCoursesList,
				context: this
			})
		},
		_refreshCoursesList: function(e) {
			var t = Math.round(e / 1e3),
				n = this._findElem("course"),
				i, s = null,
				o, u = this._$currentCourse ? this._$currentCourse.data("timetable") : null;
			this._$currentCourse = null;
			for (var a = 0, f = n.length; a < f; a++) {
				i = n.eq(a), o = i.data(), u === o.timetable && i.is(this._selector("playableCourse")) && (this._$currentCourse = i);
				if (o.chatStop <= t) i.remove();
				else {
					if (!(o.chatStart <= t)) break;
					r["mobile-device"] ? i.remove() : (s = s || i, this._addClass("playableCourse", i), this._removeClass("scheduledCourse", i))
				}
			}
			this._active && this.markCurrentCourseAsSelected(), s ? this._$currentCourse || this.trigger("course:new", s) : this.trigger("course:absent")
		},
		_updateCoursesList: function(t) {
			if (this._elem("sliderList").length) {
				var n = this._slider.getCurrent(),
					r = this._elem("course").eq(n).data("courseId"),
					i = this._elem("course").eq(n).data("start-time"),
					s = t.courses,
					o = this.prepareCoursesList(s);
				e(this._selector("sliderList")).html(o), this._slider.updateSliderProperties(), this._refreshCoursesList(this._lastUpdateTime + Date.now() - this._sendRequestTime)
			}
		},
		setActive: function(e) {
			return this._active = e, this
		},
		_onCourseClick: function(t) {
			var n = e(t.currentTarget),
				r = e(t.target);
			if (r.is(this._selector("link")) && !r.hasClass(this._class("scheduledCourse"))) return;
			if (this._hasClass("playableCourse", n))!this._hasClass("selectedCourse", n) && r.hasClass(this._class("streamSliderCourse")) ? (this._selectCourse(n), this.trigger("video:update", n.data(), !0)) : this._pauseCourse(n);
			else if (r.is(this._selector("link"))) this._showReminderPopup(n);
			else if (r.hasClass(this._class("reminderCourse"))) {
				this._selectAnnounce(n.data()), this.trigger("video:update", n.data());
				return
			}
			this.setActive(!0)
		},
		_selectCourse: function(e) {
			this._$currentCourse && this._removeClass("selectedCourse", this._$currentCourse), this._$currentCourse = e, this.markCurrentCourseAsSelected(), this.trigger("course:selected", e)
		},
		_pauseCourse: function(e) {
			this.trigger("course:pause", e)
		},
		_selectAnnounce: function(e) {
			this._$currentCourse && this._removeClass("selectedCourse", this._$currentCourse), this._active = !1, this.trigger("announce:selected", e)
		},
		_showReminderPopup: function(e) {
			var t = this._getService("popups").get("courseReminder").show();
			t.getForm().getField("studyPlanId").model.value(e.data("timetable"))
		},
		markCurrentCourseAsSelected: function() {
			return this._$currentCourse && this._addClass("selectedCourse", this._$currentCourse), this
		},
		setPauseCurrentCourse: function(e) {
			return this._$currentCourse && this._toggleClass("pausedCourse", this._$currentCourse, e), this
		},
		markFirstCourseAsSelected: function() {
			return this._selectCourse(this._findElem("playableCourse").eq(0)), this
		},
		enableSelectedCourse: function() {
			this._removeClass("selectedCourse", this._$currentCourse)
		},
		isPlayableCourse: function() {
			return !!this._findElem("playableCourse").length
		},
		getFirstPlayableCourse: function() {
			return this._findElem("playableCourse").eq(0)
		}
	});
	return u
}), function() {
	function p(e, t, n) {
		var r = t && n || 0,
			i = 0;
		t = t || [], e.toLowerCase().replace(/[0-9a-f]{2}/g, function(e) {
			i < 16 && (t[r + i++] = c[e])
		});
		while (i < 16) t[r + i++] = 0;
		return t
	}
	function d(e, t) {
		var n = t || 0,
			r = l;
		return r[e[n++]] + r[e[n++]] + r[e[n++]] + r[e[n++]] + "-" + r[e[n++]] + r[e[n++]] + "-" + r[e[n++]] + r[e[n++]] + "-" + r[e[n++]] + r[e[n++]] + "-" + r[e[n++]] + r[e[n++]] + r[e[n++]] + r[e[n++]] + r[e[n++]] + r[e[n++]]
	}
	function w(e, t, n) {
		var r = t && n || 0,
			i = t || [];
		e = e || {};
		var s = e.clockseq != null ? e.clockseq : g,
			o = e.msecs != null ? e.msecs : (new Date).getTime(),
			u = e.nsecs != null ? e.nsecs : b + 1,
			a = o - y + (u - b) / 1e4;
		a < 0 && e.clockseq == null && (s = s + 1 & 16383), (a < 0 || o > y) && e.nsecs == null && (u = 0);
		if (u >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
		y = o, b = u, g = s, o += 122192928e5;
		var f = ((o & 268435455) * 1e4 + u) % 4294967296;
		i[r++] = f >>> 24 & 255, i[r++] = f >>> 16 & 255, i[r++] = f >>> 8 & 255, i[r++] = f & 255;
		var l = o / 4294967296 * 1e4 & 268435455;
		i[r++] = l >>> 8 & 255, i[r++] = l & 255, i[r++] = l >>> 24 & 15 | 16, i[r++] = l >>> 16 & 255, i[r++] = s >>> 8 | 128, i[r++] = s & 255;
		var c = e.node || m;
		for (var h = 0; h < 6; h++) i[r + h] = c[h];
		return t ? t : d(i)
	}
	function E(e, t, n) {
		var r = t && n || 0;
		typeof e == "string" && (t = e == "binary" ? new f(16) : null, e = null), e = e || {};
		var i = e.random || (e.rng || a)();
		i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128;
		if (t) for (var s = 0; s < 16; s++) t[r + s] = i[s];
		return t || d(i)
	}
	var e = this,
		t, n, r, i = new Array(16);
	t = function() {
		var e, t = i,
			n = 0;
		for (var n = 0, e; n < 16; n++)(n & 3) == 0 && (e = Math.random() * 4294967296), t[n] = e >>> ((n & 3) << 3) & 255;
		return t
	};
	if (e.crypto && crypto.getRandomValues) {
		var s = new Uint32Array(4);
		r = function() {
			crypto.getRandomValues(s);
			for (var e = 0; e < 16; e++) i[e] = s[e >> 2] >>> (e & 3) * 8 & 255;
			return i
		}
	}
	try {
		var o = require("crypto").randomBytes;
		n = o &&
		function() {
			return o(16)
		}
	} catch (u) {}
	var a = n || r || t,
		f = typeof Buffer == "function" ? Buffer : Array,
		l = [],
		c = {};
	for (var h = 0; h < 256; h++) l[h] = (h + 256).toString(16).substr(1), c[l[h]] = h;
	var v = a(),
		m = [v[0] | 1, v[1], v[2], v[3], v[4], v[5]],
		g = (v[6] << 8 | v[7]) & 16383,
		y = 0,
		b = 0,
		S = E;
	S.v1 = w, S.v4 = E, S.parse = p, S.unparse = d, S.BufferClass = f, S.mathRNG = t, S.nodeRNG = n, S.whatwgRNG = r;
	if (typeof module != "undefined") module.exports = S;
	else {
		var x = e.uuid;
		S.noConflict = function() {
			return e.uuid = x, S
		}, e.uuid = S
	}
}(), define("uuid", function(e) {
	return function() {
		var t, n;
		return t || e.uuid
	}
}(this)), define("vendors/jwplayer/jwplayerAll", [], function() {
	return window.jwplayer
}), define("global/elements/Loader", ["underscore", "BackboneX"], function(e, t) {
	var n = t.View.extend({
		_classes: function() {
			return e.defaults({
				active: "loader_active_yes",
				state: "loader_state_%s"
			}, this._super())
		},
		_selectors: function() {
			return e.defaults({
				reloadButton: ".js-reload"
			}, this._super())
		},
		events: function() {
			var e = this._super();
			return e["click " + this._selector("reloadButton")] = this._onReloadButtonClick, e
		},
		_initProperties: function() {
			this._super(), this._avaliableStates = ["loading", "fail"], this._statesClasses = ""
		},
		initialize: function() {
			this._super(), this._initStates()
		},
		_initStates: function() {
			this._statesClasses = this._avaliableStates.map(function(e) {
				return this._class("state", e)
			}, this).join(" ")
		},
		_onReloadButtonClick: function() {
			this.trigger("reload")
		},
		showLoading: function() {
			return this._showState("loading")
		},
		showFail: function() {
			return this._showState("fail")
		},
		_showState: function(e) {
			return this.$el.removeClass(this._statesClasses).addClass(this._class("state", e)).toggleClass(this._class("active"), !0), this
		},
		hide: function() {
			return this._removeClass("active"), this
		}
	});
	return n
}), define("elements/Player/JWPlayer/JWPlayer", ["underscore", "jquery", "BackboneX", "vendors/jwplayer/jwplayerAll", "global/elements/Loader", "global/elements/ServiceManager/WithServiceManager"], function(e, t, n, r, i, s) {
	function h(e, t) {
		var n = e - .5 + Math.random() * (t - e + 1);
		return n = Math.round(n), n
	}
	var o = null,
		u = "j6J+aRhOUbBqE6KmjVwegal5+zn2icNQcwbF4w==",
		a = 600,
		f = Math.pow(2, 53) - 1,
		l = 1200,
		c = '<script src="//' + document.location.hostname + '/js/vendors/jwplayer.js"></script>' + '<script>jwplayer.key="' + u + '";</script><script>jwplayer("jwplayer_id").setup({' + 'skin: { name: "glow"}, file: "idVideo"});</script>',
		p = n.View.mix(s).extend({
			_selectors: function() {
				return e.defaults({
					player: ".js-jw-container",
					sharingText: ".jw-sharing-text",
					loader: ".js-jw-loader",
					social: ".js-jw-social",
					registrationWarning: ".js-registration-warning",
					jwplayer: ".jwplayer",
					jsLinkBroadcast: ".js-link-broadcast",
					jwPlayerContainer: ".js-jw-player",
					jwMenu: ".jw-menu",
					jwMenuItem: ".jw-menu .jw-option",
					jwSharingContent: ".jw-sharing-content",
					jwSocial: ".js-jw-social",
					jwQuality: ".jw-icon-hd",
					jwTemplate: ".js-jw-template",
					jwLinkRegistration: ".js-link-registration",
					jwLinkAuthorization: ".js-link-authorization",
					jwSharingBtn: ".jw-sharing-dock-btn"
				}, this._super())
			},
			_classes: function() {
				return e.defaults({
					jsLinkBroadcastWrapper: "jw-controlbar-right-group",
					jwOptionActive: "jw-option_active",
					jwNeedAuthorization: "js-state-need-authorization"
				}, this._super())
			},
			events: function() {
				var e = this._super();
				return e["click " + this._selector("jwMenuItem")] = this._onMenuItemClick, e["click " + this._selector("jwSharingBtn")] = this._onSharingBtnClick, e["mousedown " + this._selector("jwLinkAuthorization")] = this._onAuthLinkClick, e["mousedown " + this._selector("jwLinkRegistration")] = this._onRegistrationLinkClick, e
			},
			_initProperties: function() {
				this._super(), this._isSharingContentOpen = !1, this._loader = null, this._player = null, this._sharing = null, this.link = null, this._currentQuality = null, this._isAuth = !! t.cookie("already_client"), this._alreadyClient = (this._isAuth ? "alreadyclient" : "notalreadyclient") + "&pr=" + h(1, f), this._adsType = ["overlay1", "overlay2", "preroll", "postroll"], this._config = {}, this._jwTemplate = this._elem("jwTemplate").html().replace(/location/g, document.location.hostname), this._jwplayerEmbed = this._jwTemplate + c, this._streamAvailable = this.options.stream ? !0 : !1, this._requiredAuth = !1, this._currentVideo = "", this._blockedTime = null
			},
			initialize: function() {
				this._super(), this.options.sharing = this.options.sharing !== !1, this._initLoader(), this._initConfig(), this._initPlayer(), this._getBlockedTime(), this.$el.hasClass("js-jw-platformcraft") && (this._hideLoader(), this._setActivePlayer())
			},
			_initPlayer: function() {
				var e = "html5";
				window.jwplayer = window.jwplayer || r || {}, window.jwplayer.key = u, window.jwplayer.defaults = {
					aspectratio: this._config.wideScreen ? "4:3" : "16:9",
					autostart: !1,
					controls: !0,
					displaydescription: !0,
					displaytitle: !0,
					flashplayer: "/flash/jwplayer/jwplayer.flash.swf",
					mute: !1,
					ph: 1,
					primary: e,
					hlshtml: !0,
					repeat: !1,
					stagevideo: !1,
					stretching: "uniform",
					visualplaylist: !0,
					width: "100%",
					skin: {
						name: "glow"
					},
					logo: {
						file: "/img_new/interface/jw/jw__logo.svg",
						link: this._getService("urls").get("main"),
						position: "top-left"
					},
					ga: {}
				}, this._config.plugins = {
					getvideodata: {}
				};
				if (this.$el.hasClass("jw_type_broadcast")) {
					var t = this._config;
					return t.autostart = !0, this._player = r(this._elem("player").attr("id")).setup(t), this._initHandlers(), !0
				}
				if (this.$el.hasClass("js-jw-platformcraft")) {
					var n = this.$el.attr("data-video"),
						i = this.$el.attr("data-preview");
					return this._config.sources = this._getPlatformCraftSources(n), this._config.image = decodeURI(i), this._player = r(this._elem("player").attr("id")).setup(this._config), this._initHandlers(), !0
				}
				this._config.image = decodeURI(this.$el.attr("data-preview"));
				if (!this.$el.attr("data-preview")) try {
					this._config.image = "https://i.ytimg.com/vi/" + this._config.sources.file.match(/(\?v=)(.*)/)[2] + "/hqdefault.jpg"
				} catch (s) {
					this._config.image = "https://i.ytimg.com/vi/" + this._config.sources.file.split("https://youtu.be/")[1] + "/hqdefault.jpg"
				} finally {}
				this._player = r(this._elem("player").attr("id")).setup(this._config), this._initHandlers()
			},
			_getPlatformCraftSources: function(e, t) {
				var t = t || !0,
					e = e;
				return e = e.replace("1280x720%29.mp4", ""), e = e.replace(".mp4", "%20%28"), [{
					file: e + "1280x720%29.mp4",
					label: "720p",
					"default": "true"
				}, {
					file: e + "640x360%29.mp4",
					label: "360p"
				}, {
					file: e + "480xauto%29.mp4",
					label: "270p"
				}, {
					file: e + "300x200%29.mp4",
					label: "200p"
				}]
			},
			_initLoader: function() {
				this._loader = new i({
					el: this._elem("loader")
				})
			},
			_isThisFireFox: function() {
				return navigator.userAgent.toLowerCase().indexOf("firefox") > -1
			},
			_moveLinkBroadcast: e.method.once(function() {
				this._elem("jsLinkBroadcast") && (this._findElem("jsLinkBroadcastWrapper").prepend(this._elem("jsLinkBroadcast").clone()), this.setLinkBroadcast(this.link))
			}),
			setLinkBroadcast: function(e) {
				this._findElem("jsLinkBroadcast").attr("href", e)
			},
			_initHandlers: function() {
				this._player.on("all", this._triggerEvents, this), this._player.on("play", this._setActivePlayer, this), this._player.on("ready", this._hideLoader, this), this._player.on("play", this._initPlayerMenu, this), this._player.on("play", this._moveLinkBroadcast, this), !this._isAuth && this._elem("registrationWarning").length && this._player.on("time", this._onPlayerProgress, this), this._player.on("play", this._initSocial, this), this._player.on("ready", this._initRegistrationWarning, this)
			},
			_triggerEvents: function(e) {
				this.trigger.apply(this, arguments)
			},
			_onPlayerProgress: function(e) {
				this._checkFreeVideoPlayback(e) || (this._player.stop(), this._showRegistrationBlock(), this._initRegAuthLinks())
			},
			_initRegAuthLinks: function() {
				this._requiredAuth ? this._setRegAuthLink("stream", this._requiredAuth) : this._currentVideo && this._setRegAuthLink("videoId", this._currentVideo)
			},
			setCurrentVideo: function(e) {
				return this._currentVideo = e, this
			},
			_setRegAuthLink: function(e, t) {
				var n = this._elem("jwLinkRegistration"),
					r = "?player=true&" + e + "=" + t,
					i = e + "|" + t;
				n.attr("href", n.data("href") + r), n.data("video", e + "|" + t), this._elem("jwLinkAuthorization").data("video", i), this._pushDataLayer("popup", "popup", "impression", i), this._pushPiwik("popup", "popup", "impression", i)
			},
			_onAuthLinkClick: function(e) {
				if (e.which === 1 || e.which === 2) t.cookie("successLoginUrl", window.location.href, {
					path: "/"
				}), this._pushDataLayer("popup", "popup", "authorization", t(e.currentTarget).data("video")), this._pushPiwik("popup", "popup", "authorization", t(e.currentTarget).data("video"))
			},
			_onRegistrationLinkClick: function(e) {
				if (e.which === 1 || e.which === 2) this._pushDataLayer("popup", "popup", "open account", t(e.currentTarget).data("video")), this._pushPiwik("popup", "popup", "open account", t(e.currentTarget).data("video")), t.cookie("referer", window.location.href, {
					path: "/"
				})
			},
			_checkFreeVideoPlayback: function(e) {
				return this._isAuth || e.position < this._blockedTime
			},
			_showRegistrationBlock: function() {
				this._removeClass("hidden", "registrationWarning"), this._addClass("jwNeedAuthorization", "jwplayer")
			},
			_hideRegistrationBlock: function() {
				this._addClass("hidden", "registrationWarning")
			},
			_pushDataLayer: function(e, t, n, r) {
				dataLayer && dataLayer.push({
					event: e,
					eventCategory: t,
					eventAction: n,
					eventLabel: r
				})
			},
			_pushPiwik: function(e, t, n, r) {
				_paq && _paq.push(["trackEvent", e, t, n, r])
			},
			_initSocial: function() {
				this._findElem("jwSharingContent").length && this._findElem("jwSharingContent").prepend(this._elem("jwSocial"))
			},
			_initRegistrationWarning: function() {
				this._elem("registrationWarning").length && this._findElem("jwplayer").append(this._elem("registrationWarning"))
			},
			_getBlockedTime: function() {
				this._blockedTime = this._requiredAuth ? a : this._config.blockedTime || l
			},
			_hideLoader: function() {
				this._loader.hide()
			},
			_setActivePlayer: function() {
				o = this._player
			},
			play: function(e, t, n) {
				var n = n || "",
					t = t || "youtube";
				if (!this._player) return this;
				this._hideRegistrationBlock();
				var i = this._prepareSources(e),
					s = this._config;
				return t == "platform_craft" ? s.sources = this._getPlatformCraftSources(e) : s.sources = i, s.file = s.sources[0].file, s.image = decodeURI(n), s.autostart = !0, r(this._elem("player").attr("id")).remove(), this._player = r(this._elem("player").attr("id")), this._player.setup(s), this._initHandlers(), this._removeClass("jwNeedAuthorization", "jwplayer"), this._hideLoader(), this
			},
			_prepareSources: function(t) {
				var n = e.clone(t);
				return e.isString(t) ? n = [{
					file: t
				}] : e.isArray(t) && (n = t.map(function(t) {
					return e.isString(t) ? {
						file: t
					} : t
				})), n
			},
			load: function(e) {
				return this._player.load(e), this
			},
			pause: function() {
				return this._player.pause(), this
			},
			stop: function() {
				return this._player.stop(), this
			},
			updateSharing: function(e) {
				return this._elem("sharingText").eq(1).text(this._jwplayerEmbed.replace("idVideo", e)), this
			},
			_initConfig: function() {
				var t = this._data.config,
					n = this._data.video;
				t && e.extend(this._config, t), e.extend(this._config, this.options.config), this._config.sharing = {
					code: this._jwplayerEmbed.replace("idVideo", n),
					sites: [],
					heading: ""
				}, this._verificationAdv(this._config, this._alreadyClient)
			},
			isVisible: function() {
				return this._elem("player").is(":visible")
			},
			show: function() {
				return this._removeClass("hidden"), this
			},
			hide: function() {
				return this._addClass("hidden"), this
			},
			_initPlayerMenu: function() {
				var e = this._findElem("jwMenu").find("li");
				this._findElem("jwMenu").length && (this._currentQuality ? e.eq(this._currentQuality).addClass(this._class("jwOptionActive")) : (e.eq(0).addClass(this._class("jwOptionActive")), this._findElem("jwQuality").attr("data-content", PLAYER_TRANSLATIONS.auto)), e.each(function(e, n) {
					var r = t(n);
					r.text(PLAYER_TRANSLATIONS[r.text()])
				}))
			},
			_onMenuItemClick: function(e) {
				this._findElem("jwQuality").attr("data-content", t(e.target).text()), this._removeClass("jwOptionActive", this._findElem("jwMenuItem")), this._addClass("jwOptionActive", t(e.target)), this._currentQuality = this._findElem("jwMenuItem").index(t(e.target))
			},
			_onSharingBtnClick: function() {
				return this._isSharingContentOpen ? (this.closeSharing(), this._isSharingContentOpen = !1) : this._isSharingContentOpen = !0, this
			},
			closeSharing: function() {
				return this._player.getPlugin("sharing").close(), this
			},
			_verificationAdv: function(e, t) {
				e.advertising && e.advertising.schedule && this._adsType.forEach(function(n) {
					e.advertising.schedule[n] && (e.advertising.schedule[n].tag += t)
				})
			},
			getConfig: function() {
				return this._config
			},
			getPlayer: function() {
				return this._player
			},
			setRequiredAuth: function(e) {
				return this._requiredAuth = e, this
			}
		});
	return n.on("change:visibility", function() {
		o && o.getState() == "playing" && o.pause()
	}), p
}), define("elements/Player/AbstractVideoPlayer/VideoPlayerButton", ["underscore", "global_forms/Inputs/Button/ButtonInputView"], function(e, t) {
	var n = t.extend({
		_classes: function() {
			return e.defaults({
				loading: "player__play_state_loading"
			}, this._super())
		}
	});
	return n
}), define("elements/VideoSchedule/VideoScheduleJWPlayer", ["jquery", "underscore", "Modernizr", "BackboneX", "uuid", "elements/Player/JWPlayer/JWPlayer", "global_forms/Inputs/inputsFactory", "elements/Player/AbstractVideoPlayer/VideoPlayerButton", "global/elements/ServiceManager/WithServiceManager"], function(e, t, n, r, i, s, o, u, a) {
	o.addProduct("VideoPlayerButton", u);
	var f = r.View.mix(a).extend({
		_classes: function() {
			return t.defaults({
				activeOverlay: "player__overlay_active_yes"
			}, this._super())
		},
		_selectors: function() {
			return t.defaults({
				overlays: ".player__overlay",
				streamPlayer: ".player__stream",
				videoPlayer: ".player__video",
				firstAnnounce: ".js-announce:first",
				firstNotStreamPlayerOverlay: ".player__overlay:not(.player__stream):first",
				playerWrapper: ".player__video",
				play: ".player__play",
				playButton: ".player__play",
				preview: ".player__video-preview",
				player: ".js-jw-player",
				noStream: ".player__no-stream",
				noFlash: ".player__no-flash"
			}, this._super())
		},
		_initProperties: function() {
			this._super(), this._streamPlayer = null, this._streamPingIntervalId = null, this._uuid = null, this._streamPingUrl = "/" + lang + "/secured/school/online/", this._currentStreamInfo = null, this._bufferFull = !1, this._ping = !1
		},
		initialize: function() {
			this._super(), this._initPlayButton()
		},
		_initPlayButton: function() {
			try {
				this._playButton = o.createInstance(this._elem("playButton")), this._playButton.on("click", this._onPlayButtonClick, this)
			} catch (e) {}
		},
		_hidePreloader: function() {
			this._playButton.enable(), this._elem("preview").hide()
		},
		_onPlayButtonClick: function() {
			this._playButton.load(), this._initStreamPlayer(this._elem("streamPlayer").data().requiredAuth)
		},
		_initStreamPlayer: function(e) {
			var n = t.clone(this._streamSources);
			this._streamPlayer = new s({
				el: this._elem("player"),
				videoId: this._elem("player").data("video"),
				sharing: !1,
				stream: !0,
				config: {
					sources: n
				}
			}), this._streamPlayer.setRequiredAuth(e), this._streamPlayer.on("all", function(e) {
				this.trigger("stream:" + e)
			}, this).on("ready", this._onStreamPlayerReady, this).on("mediaError", this._onStreamPlayerSetupMediaError, this).on("setupError", this._onStreamPlayerSetupMediaError, this).on("bufferFull", this._onStreamPlayerBufferFull, this).on("buffer", function() {
				this._bufferFull = !1;
				if (window.localStorage && this._ping === !1) {
					var e = localStorage.getItem("stream_player_uuid");
					e || (e = i.v4(), localStorage.setItem("stream_player_uuid", e)), this._uuid = e, this._startStreamPing(), this._ping = !0
				}
				this.trigger("buffer")
			}, this).on("idle", function() {
				clearInterval(this._streamPingIntervalId), this._ping = !1
			}, this)
		},
		_onStreamPlayerReady: function() {
			this._streamPlayer.show().play()
		},
		_onStreamPlayerBufferFull: function() {
			this._bufferFull = !0
		},
		_isThisFireFox: function() {
			return navigator.userAgent.toLowerCase().indexOf("firefox") > -1
		},
		_isFlashInstalled: function() {
			var e = !1;
			if (navigator.plugins) navigator.plugins["Shockwave Flash"] ? e = !0 : navigator.plugins["Shockwave Flash 2.0"] && (e = !0);
			else if (navigator.mimeTypes) {
				var t = navigator.mimeTypes["application/x-shockwave-flash"];
				t && t.enabledPlugin && (e = !0)
			} else e = !0;
			return e
		},
		_onStreamPlayerSetupMediaError: function(e) {
			this._streamPlayer && this._bufferFull ? (this._streamPlayer.getPlayer().playAd(this._streamPlayer.getConfig().advertising.schedule.postroll.tag), ["adComplete", "adSkipped"].forEach(function(e) {
				this._streamPlayer.once(e, this._showErrorStreamBlock, this)
			}, this)) : (this._showErrorStreamBlock(), this._bufferFull = !1)
		},
		_showErrorStreamBlock: function() {
			this._hidePreloader(), this._removeClass("hidden", "noStream"), this.stopStream(), this._streamPlayer.hide(), this._streamPlayer = null
		},
		_showErrorFlashBlock: function() {
			this._hidePreloader(), this._removeClass("hidden", "noFlash"), this.stopStream(), this._streamPlayer.hide(), this._streamPlayer = null
		},
		playStream: function(e, t) {
			return this.setStream(e), this._streamPlayer ? this._playStream(t, e.requiredAuth) : this._initStreamPlayer(e.requiredAuth), this
		},
		showOverlay: function(e) {
			this._hasClass("activeOverlay", e) || (this._removeClass("activeOverlay", "overlays"), this._addClass("activeOverlay", e))
		},
		setStream: function(e) {
			return this._currentStreamInfo = e, this.showOverlay("streamPlayer"), this._streamSources = this._getStreamSources(e), this
		},
		_getStreamSources: function(e) {
			e || (e = this._elem("streamPlayer").data());
			var t = e.streamNameM;
			if (!t) return null;
			var r = e.streamPath,
				i = e.streamUrlHls,
				s = e.streamUrlDash,
				o = n.touch ? [{
					file: i
				}] : [{
					file: i
				}, {
					file: s
				}];
			return o
		},
		_playStream: function(e, t) {
			this._streamSources && (this._streamPlayer.show(), this._streamPlayer.link = e, this._streamPlayer.setRequiredAuth(t), this._streamPlayer.play(this._streamSources))
		},
		isStreamPlayerVisible: function() {
			return this._hasClass("activeOverlay", "streamPlayer")
		},
		isStandardPlayerVisible: function() {
			return this._hasClass("activeOverlay", "videoPlayer")
		},
		hideStreamPlayer: function() {
			return this.isStreamPlayerVisible() && (this._elem("firstAnnounce").length ? this.showOverlay("firstAnnounce") : this.showOverlay("firstNotStreamPlayerOverlay"), this.stopStream()), this
		},
		_isVideoSupported: function() {
			return !0
		},
		playVideo: function(e) {
			return this
		},
		stopVideo: function() {
			return this
		},
		stopStream: function() {
			return this._streamPlayer && this._streamPlayer.stop(), this
		},
		getStreamPlayer: function() {
			return this._streamPlayer
		},
		_startStreamPing: function() {
			this._sendStreamPing(), this._streamPingIntervalId = setInterval(this._sendStreamPing, 3e4)
		},
		_sendStreamPing: t.method.bind(function() {
			var t = this._currentStreamInfo || {};
			e.ajax({
				type: "POST",
				url: this._streamPingUrl,
				data: {
					controller: "system_message",
					command: "activity",
					lang_id: lang,
					timetable_id: t.timetable,
					room: t.sessionId + "_activity",
					visitor_id: this._uuid
				}
			})
		})
	});
	return f
}), define("elements/VideoSchedule/VideoScheduleJW", ["underscore", "BackboneX", "elements/Timer/TimerClockView", "./CoursesList", "./VideoScheduleJWPlayer"], function(e, t, n, r, i) {
	var s = -3,
		o = t.View.extend({
			_selectors: function() {
				return e.defaults({
					clock: ".js-moscow-time",
					coursesList: ".js-courses-list",
					player: ".player",
					schedulePlayer: ".js-jw-player",
					playerStream: ".player__stream",
					courseName: ".js-course-name",
					courseTeacher: ".js-course-teacher",
					courseTime: ".js-course-time",
					announce: ".js-announce",
					announceImg: ".js-announce-img",
					courseOnline: ".js-course-online",
					courseChat: ".js-course-chat",
					courseChatLink: ".js-course-chat-link",
					playButton: ".player__play"
				}, this._super())
			},
			_classes: function() {
				return e.defaults({
					playerActive: "player__overlay_active_yes"
				}, this._super())
			},
			_initProperties: function() {
				this._super(), this._coursesList = null, this._player = null
			},
			initialize: function() {
				this._super(), this._initClock(), this._initPlayer(), this._elem("coursesList").length ? this._initCoursesList() : this._player.setStream(this._elem("playerStream").data()), this._elem("courseOnline").length && !this._elem("courseOnline").is(":visible") && this._elem("playButton").addClass("hidden")
			},
			_initClock: function() {
				var e = this._elem("clock");
				this._clock = new n({
					el: e,
					timeZone: -e.data("timezone") || s
				})
			},
			_initCoursesList: function() {
				this._coursesList = new r({
					el: this._elem("coursesList")
				}), this._coursesList.on("course:selected", this._onCourseSelected, this).on("course:pause", this._onCoursePause, this).on("announce:selected", this._onAnnounceSelected, this).on("course:new", this._onNewCourseAvailable, this).on("course:absent", this._onCourseAbsent, this).on("video:update", this._onVideoUpdate, this);
				var e = this._coursesList.getFirstPlayableCourse();
				e && !this._player.isStreamPlayerVisible() && this._setStreamIfPossible(e), this._clock.on("minute", this._onMinute, this)
			},
			_initPlayer: function() {
				this._player = new i({
					el: this._elem("player")
				}), this._player.on("stream:beforePlay", function() {
					var e = this._coursesList;
					e.getCurrentCourse() ? e.markCurrentCourseAsSelected() : e.markFirstCourseAsSelected(), this._player.getStreamPlayer().on("pause", this._setPauseCurrentCourse.bind(this, !0)), this._player.getStreamPlayer().on("play", this._setPauseCurrentCourse.bind(this, !1))
				}, this)
			},
			_onMinute: function(e) {
				this._coursesList.update(e)
			},
			_setPauseCurrentCourse: function(e) {
				this._coursesList.setPauseCurrentCourse(e)
			},
			_onCourseSelected: function(e) {
				this._elem("playerStream").data("sessionId") && (e = this._elem("playerStream")), this._addClass("hidden", "announce"), this._player.playStream(e.data(), e.data("broadcastUrl")), this._player.getStreamPlayer().link = e.data("broadcastUrl"), this._player.getStreamPlayer().setLinkBroadcast(e.data("broadcastUrl"))
			},
			_onCoursePause: function() {
				this._player.getStreamPlayer() && this._player.getStreamPlayer().pause()
			},
			_onNewCourseAvailable: function(e) {
				this._setStreamIfPossible(e)
			},
			_setStreamIfPossible: function(e) {
				(!this._player.isStandardPlayerVisible() && this._coursesList.isPlayableCourse() || !this._elem("coursesList").length) && this._player.setStream(e.data())
			},
			_onCourseAbsent: function() {
				this._player.hideStreamPlayer()
			},
			getCoursesList: function() {
				return this._coursesList
			},
			_onVideoUpdate: function(e, t) {
				this._elem("courseName").text(e.courseName), this._elem("courseTeacher").text(e.courseTeacher), this._elem("courseTime").text(e.courseTime), this._elem("courseChatLink").attr("href", location.protocol + "//" + location.host + "/" + lang + "/school/broadcast/" + e.timetable + "/"), this._toggleClass("hidden", "courseOnline", !t), this._toggleClass("hidden", "courseChat", !t)
			},
			_onAnnounceSelected: function(e) {
				this._player.stopStream(), this._removeClass("hidden", "announce"), this._removeClass("playerActive", "announce"), this._elem("announceImg").attr("src", e.src)
			}
		});
	return o
}), define("global_forms/Fields/Phone/PhoneFieldModel", ["underscore", "../Text/TextInputFieldModel", "global_forms/Validation/PhoneFieldValidator"], function(e, t, n) {
	var r = t.extend({
		_validator: new n,
		_initProperties: function() {
			this._super(), this._formattersMap = e.defaults({
				human: "_humanFormatter"
			}, this._formattersMap)
		},
		_humanFormatter: function(e) {
			return e = e.map(function(e) {
				return (e || "").trim()
			}), ["+", e[0], " ", e[1]].join("")
		},
		initialize: function() {
			this._super(), this.addValidationRule("phone")
		},
		getPostValue: function() {
			return this._super().replace(/\D/g, "")
		},
		_onChangeInputValue: function(e, t) {
			this._super(e, t), e.get("name") === "mobile_phone_country_code" && this.trigger("change:code", e, t)
		}
	});
	return r
}), define("global_forms/Fields/Phone/PhoneFieldView", ["../Text/TextInputFieldView", "./PhoneFieldModel"], function(e, t) {
	var n = e.extend({
		_ModelConstructor: t
	});
	return n
}), define("elements/VideoSchedule/CourseReminderForm", ["global_forms/Form/Ajax/AjaxFormView", "global_forms/Fields/fieldFactory", "global_forms/Fields/Phone/PhoneFieldView", "global_forms/Form/Captcha/AjaxCaptcha/AjaxFormWithCaptcha", "global/elements/ServiceManager/WithServiceManager"], function(e, t, n, r, i) {
	t.addProduct("PhoneField", n);
	var s = e.mix(r, i).extend({
		_processSaveSuccess: function(e) {
			this._super(e), this._getService("popups").show("courseReminderSuccess")
		}
	});
	return s
}), define("elements/Timer/contentUpdateDigitStrategy", [], function() {
	return function(e, t) {
		e.text(t)
	}
}), define("PageClasses/UserService", ["underscore", "BackboneX"], function(e, t) {
	var n = t.View.extend({
		_selectors: function() {
			return e.defaults({
				userAuth: ".js-user-auth"
			}, this._super())
		},
		isUserAuth: function() {
			return !!this._elem("userAuth").data("userAuth")
		}
	});
	return n
}), define("PageClasses/WithUserService", ["vendors/Backbone/Mixin", "./UserService"], function(e, t) {
	var n = new e({
		initialize: function() {
			this._super(), this._initUserService()
		},
		_initUserService: function() {
			this._getServiceManager().setService("user", new t({
				el: this.$el
			}))
		}
	});
	return n
}), function(e, t, n) {
	if (e.PushStream) return;
	var r = {},
		i = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		s = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		o = function(e) {
			return (e < 10 ? "0" : "") + e
		};
	r.dateToUTCString = function(e) {
		var t = o(e.getUTCHours()) + ":" + o(e.getUTCMinutes()) + ":" + o(e.getUTCSeconds());
		return i[e.getUTCDay()] + ", " + o(e.getUTCDate()) + " " + s[e.getUTCMonth()] + " " + e.getUTCFullYear() + " " + t + " GMT"
	};
	var u = function() {
			var e = arguments[0] || {};
			for (var t = 0; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) if (!n.hasOwnProperty || n.hasOwnProperty(r)) e[r] = n[r]
			}
			return e
		},
		a = /^[\],:{}\s]*$/,
		f = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
		l = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
		c = /(?:^|:|,)(?:\s*\[)+/g,
		h = function(e) {
			return e.replace(/^\s*/, "").replace(/\s*$/, "")
		};
	r.parseJSON = function(t) {
		if (!t || !b(t)) return null;
		t = h(t);
		if (e.JSON && e.JSON.parse) try {
			return e.JSON.parse(t)
		} catch (n) {
			throw "Invalid JSON: " + t
		}
		if (a.test(t.replace(f, "@").replace(l, "]").replace(c, ""))) return (new Function("return " + t))();
		throw "Invalid JSON: " + t
	};
	var p = function(e) {
			var t = {};
			return t[e.tagArgument] = "", t[e.timeArgument] = "", t[e.eventIdArgument] = "", e.messagesControlByArgument && (t[e.tagArgument] = Number(e._etag), e._lastModified ? t[e.timeArgument] = e._lastModified : e._lastEventId && (t[e.eventIdArgument] = e._lastEventId)), t
		},
		d = function() {
			return (new Date).getTime()
		},
		v = function() {
			return {
				_: d()
			}
		},
		m = function(t) {
			var n = t;
			if (typeof t == "object") {
				n = "";
				for (var r in t) if (!t.hasOwnProperty || t.hasOwnProperty(r)) n += "&" + r + "=" + e.escape(t[r]);
				n = n.substring(1)
			}
			return n || ""
		},
		g = function(e, t) {
			return e + (e.indexOf("?") < 0 ? "?" : "&") + m(t)
		},
		y = Array.isArray ||
	function(e) {
		return Object.prototype.toString.call(e) === "[object Array]"
	}, b = function(e) {
		return Object.prototype.toString.call(e) === "[object String]"
	}, w = function(e) {
		return Object.prototype.toString.call(e) === "[object Date]"
	}, E = {
		logger: null,
		debug: function() {
			I.LOG_LEVEL === "debug" && E._log.apply(E._log, arguments)
		},
		info: function() {
			(I.LOG_LEVEL === "info" || I.LOG_LEVEL === "debug") && E._log.apply(E._log, arguments)
		},
		error: function() {
			E._log.apply(E._log, arguments)
		},
		_initLogger: function() {
			var t = e.console;
			t && t.log && (t.log.apply ? E.logger = t.log : typeof t.log == "object" && Function.prototype.bind ? E.logger = Function.prototype.bind.call(t.log, t) : typeof t.log == "object" && Function.prototype.call && (E.logger = function() {
				Function.prototype.call.call(t.log, t, Array.prototype.slice.call(arguments))
			}))
		},
		_log: function() {
			E.logger || E._initLogger();
			if (E.logger) try {
				E.logger.apply(e.console, arguments)
			} catch (n) {
				E._initLogger(), E.logger && E.logger.apply(e.console, arguments)
			}
			var r = t.getElementById(I.LOG_OUTPUT_ELEMENT_ID);
			if (r) {
				var i = "";
				for (var s = 0; s < arguments.length; s++) i += arguments[s] + " ";
				r.innerHTML += i + "\n";
				var o = r.innerHTML.split("\n");
				o.length > 100 && (r.innerHTML = o.slice(-100).join("\n"))
			}
		}
	}, S = {
		_getXHRObject: function() {
			var t = !1;
			try {
				t = new e.XMLHttpRequest
			} catch (n) {
				try {
					t = new e.XDomainRequest
				} catch (r) {
					try {
						t = new e.ActiveXObject("Msxml2.XMLHTTP")
					} catch (i) {
						try {
							t = new e.ActiveXObject("Microsoft.XMLHTTP")
						} catch (s) {
							t = !1
						}
					}
				}
			}
			return t
		},
		_send: function(t, r) {
			t = t || {}, t.timeout = t.timeout || 3e4;
			var i = S._getXHRObject();
			if (!i || !t.url) return;
			S.clear(t), i.onreadystatechange = function() {
				i.readyState === 4 && (S.clear(t), t.afterReceive && t.afterReceive(i), i.status === 200 ? t.success && t.success(i.responseText) : t.error && t.error(i.status))
			}, t.beforeOpen && t.beforeOpen(i);
			var s = {},
				o = null,
				a = "GET";
			r ? (o = m(t.data), a = "POST") : s = t.data || {}, i.open(a, g(t.url, u({}, s, v())), !0), t.beforeSend && t.beforeSend(i);
			var f = function() {
					try {
						i.onreadystatechange = n, i.abort()
					} catch (e) {}
					S.clear(t), t.error(304)
				};
			return r ? (i.setRequestHeader("Accept", "application/json"), i.setRequestHeader("Content-type", "application/x-www-form-urlencoded")) : t.timeoutId = e.setTimeout(f, t.timeout + 2e3), i.send(o), i
		},
		_clear_script: function(e) {
			e && (e.onerror = e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e))
		},
		_clear_timeout: function(e) {
			e.timeoutId = O(e.timeoutId)
		},
		clear: function(e) {
			S._clear_timeout(e), S._clear_script(t.getElementById(e.scriptId))
		},
		jsonp: function(n) {
			n.timeout = n.timeout || 3e4, S.clear(n);
			var r = t.head || t.getElementsByTagName("head")[0],
				i = t.createElement("script"),
				s = d(),
				o = function() {
					S.clear(n);
					var t = n.data.callback;
					t && (e[t] = function() {
						e[t] = null
					});
					var r = d();
					n.error(r - s > n.timeout / 2 ? 304 : 0)
				},
				a = function() {
					S.clear(n), n.load()
				};
			i.onerror = o, i.onload = i.onreadystatechange = function(e) {
				(!i.readyState || /loaded|complete/.test(i.readyState)) && a()
			}, n.beforeOpen && n.beforeOpen({}), n.beforeSend && n.beforeSend({}), n.timeoutId = e.setTimeout(o, n.timeout + 2e3), n.scriptId = n.scriptId || d();
			var f = n.data.callback;
			return f && (e[f] = function() {
				e[f] = null
			}), n.data.callback = n.scriptId + "_onmessage_" + d(), e[n.data.callback] = n.success, i.setAttribute("src", g(n.url, u({}, n.data, v()))), i.setAttribute("async", "async"), i.setAttribute("id", n.scriptId), r.insertBefore(i, r.firstChild), n
		},
		load: function(e) {
			return S._send(e, !1)
		},
		post: function(e) {
			return S._send(e, !0)
		}
	}, x = function(t) {
		return t ? e.escape(t) : ""
	}, T = function(t) {
		return t ? e.unescape(t) : ""
	};
	r.parseMessage = function(e, t) {
		var n = e;
		b(e) && (n = r.parseJSON(e));
		var i = {
			id: n[t.jsonIdKey],
			channel: n[t.jsonChannelKey],
			text: b(n[t.jsonTextKey]) ? T(n[t.jsonTextKey]) : n[t.jsonTextKey],
			tag: n[t.jsonTagKey],
			time: n[t.jsonTimeKey],
			eventid: n[t.jsonEventIdKey] || ""
		};
		return i
	};
	var N = function(e) {
			return e.backtrack ? ".b" + Number(e.backtrack) : ""
		},
		C = function(e, t) {
			var n = "";
			for (var r in e) if (!e.hasOwnProperty || e.hasOwnProperty(r)) n += "/" + r + (t ? N(e[r]) : "");
			return n
		},
		k = function(e, t, n, r) {
			var i = e.wrapper.type === P.TYPE,
				s = e.useSSL,
				o = i ? s ? "wss://" : "ws://" : s ? "https://" : "http://";
			o += e.host, o += !s && e.port === 80 || s && e.port === 443 ? "" : ":" + e.port, o += t;
			var a = C(e.channels, r);
			if (e.channelsByArgument) {
				var f = {};
				f[e.channelsArgument] = a.substring(1), n = u({}, n, f)
			} else o += a;
			return g(o, n)
		},
		L = function(e) {
			var t = "",
				n = e.useSSL ? "https://" : "http://";
			n += e.host, n += e.port !== 80 && e.port !== 443 ? ":" + e.port : "", n += e.urlPrefixPublisher;
			for (var r in e.channels) if (!e.channels.hasOwnProperty || e.channels.hasOwnProperty(r)) {
				t = r;
				break
			}
			return n += "?id=" + t, n
		};
	r.extract_xss_domain = function(e) {
		if (e.match(/^(\d{1,3}\.){3}\d{1,3}$/)) return e;
		var t = e.split("."),
			n = Math.max(t.length - 1, e.match(/(\w{4,}\.\w{2}|\.\w{3,})$/) ? 2 : 3);
		return t.slice(-1 * n).join(".")
	};
	var A = function(e, t) {
			return function() {
				return e.apply(t, arguments)
			}
		},
		O = function(t) {
			return t && e.clearTimeout(t), null
		},
		M = function(e) {
			E.info("[" + this.type + "] message received", arguments);
			var t = r.parseMessage(e.data, this.pushstream);
			t.tag && (this.pushstream._etag = t.tag), t.time && (this.pushstream._lastModified = t.time), t.eventid && (this.pushstream._lastEventId = t.eventid), this.pushstream._onmessage(t.text, t.id, t.channel, t.eventid, !0)
		},
		_ = function() {
			this.pushstream._onopen(), E.info("[" + this.type + "] connection opened")
		},
		D = function(t) {
			E.info("[" + this.type + "] error (disconnected by server):", t);
			if (this.pushstream.readyState === I.OPEN && this.type === H.TYPE && t.type === "error" && this.connection.readyState === e.EventSource.CONNECTING) return;
			this._closeCurrentConnection(), this.pushstream._onerror({
				type: t && (t.type === "load" || t.type === "close") || this.pushstream.readyState === I.CONNECTING ? "load" : "timeout"
			})
		},
		P = function(t) {
			if (!e.WebSocket && !e.MozWebSocket) throw "WebSocket not supported";
			this.type = P.TYPE, this.pushstream = t, this.connection = null
		};
	P.TYPE = "WebSocket", P.prototype = {
		connect: function() {
			this._closeCurrentConnection();
			var t = u({}, this.pushstream.extraParams(), v(), p(this.pushstream)),
				n = k(this.pushstream, this.pushstream.urlPrefixWebsocket, t, !this.pushstream._useControlArguments());
			this.connection = e.WebSocket ? new e.WebSocket(n) : new e.MozWebSocket(n), this.connection.onerror = A(D, this), this.connection.onclose = A(D, this), this.connection.onopen = A(_, this), this.connection.onmessage = A(M, this), E.info("[WebSocket] connecting to:", n)
		},
		disconnect: function() {
			this.connection && (E.debug("[WebSocket] closing connection to:", this.connection.URL), this.connection.onclose = null, this._closeCurrentConnection(), this.pushstream._onclose())
		},
		_closeCurrentConnection: function() {
			if (this.connection) {
				try {
					this.connection.close()
				} catch (e) {}
				this.connection = null
			}
		},
		sendMessage: function(e) {
			this.connection && this.connection.send(e)
		}
	};
	var H = function(t) {
			if (!e.EventSource) throw "EventSource not supported";
			this.type = H.TYPE, this.pushstream = t, this.connection = null
		};
	H.TYPE = "EventSource", H.prototype = {
		connect: function() {
			this._closeCurrentConnection();
			var t = u({}, this.pushstream.extraParams(), v(), p(this.pushstream)),
				n = k(this.pushstream, this.pushstream.urlPrefixEventsource, t, !this.pushstream._useControlArguments());
			this.connection = new e.EventSource(n), this.connection.onerror = A(D, this), this.connection.onopen = A(_, this), this.connection.onmessage = A(M, this), E.info("[EventSource] connecting to:", n)
		},
		disconnect: function() {
			this.connection && (E.debug("[EventSource] closing connection to:", this.connection.URL), this.connection.onclose = null, this._closeCurrentConnection(), this.pushstream._onclose())
		},
		_closeCurrentConnection: function() {
			if (this.connection) {
				try {
					this.connection.close()
				} catch (e) {}
				this.connection = null
			}
		}
	};
	var B = function(e) {
			this.type = B.TYPE, this.pushstream = e, this.connection = null, this.url = null, this.frameloadtimer = null, this.pingtimer = null, this.iframeId = "PushStreamManager_" + e.id
		};
	B.TYPE = "Stream", B.prototype = {
		connect: function() {
			this._closeCurrentConnection();
			var e = r.extract_xss_domain(this.pushstream.host);
			try {
				t.domain = e
			} catch (n) {
				E.error("[Stream] (warning) problem setting document.domain = " + e + " (OBS: IE8 does not support set IP numbers as domain)")
			}
			var i = u({}, this.pushstream.extraParams(), v(), {
				streamid: this.pushstream.id
			}, p(this.pushstream));
			this.url = k(this.pushstream, this.pushstream.urlPrefixStream, i, !this.pushstream._useControlArguments()), E.debug("[Stream] connecting to:", this.url), this.loadFrame(this.url)
		},
		disconnect: function() {
			this.connection && (E.debug("[Stream] closing connection to:", this.url), this._closeCurrentConnection(), this.pushstream._onclose())
		},
		_clear_iframe: function() {
			var e = t.getElementById(this.iframeId);
			e && (e.onload = null, e.src = "about:blank", e.parentNode && e.parentNode.removeChild(e))
		},
		_closeCurrentConnection: function() {
			this._clear_iframe(), this.connection && (this.pingtimer = O(this.pingtimer), this.frameloadtimer = O(this.frameloadtimer), this.connection = null, this.transferDoc = null, typeof e.CollectGarbage == "function" && e.CollectGarbage())
		},
		loadFrame: function(n) {
			this._clear_iframe();
			try {
				var r = new e.ActiveXObject("htmlfile");
				r.open(), r.write('<html><script>document.domain="' + t.domain + '";</script></html>'), r.parentWindow.PushStream = I, r.close();
				var i = r.createElement("div");
				r.appendChild(i), i.innerHTML = '<iframe src="' + n + '"></iframe>', this.connection = i.getElementsByTagName("IFRAME")[0], this.connection.onload = A(D, this), this.transferDoc = r
			} catch (s) {
				var o = t.createElement("IFRAME");
				o.style.width = "1px", o.style.height = "1px", o.style.border = "none", o.style.position = "absolute", o.style.top = "-10px", o.style.marginTop = "-10px", o.style.zIndex = "-20", o.PushStream = I, t.body.appendChild(o), o.setAttribute("src", n), o.onload = A(D, this), this.connection = o
			}
			this.connection.setAttribute("id", this.iframeId), this.frameloadtimer = e.setTimeout(A(D, this), this.pushstream.timeout)
		},
		register: function(e) {
			this.frameloadtimer = O(this.frameloadtimer), e.p = A(this.process, this), this.connection.onload = A(this._onframeloaded, this), this.pushstream._onopen(), this.setPingTimer(), E.info("[Stream] frame registered")
		},
		process: function(e, t, n, r, i, s) {
			this.pingtimer = O(this.pingtimer), E.info("[Stream] message received", arguments), e !== -1 && (s && (this.pushstream._etag = s), i && (this.pushstream._lastModified = i), r && (this.pushstream._lastEventId = r)), this.pushstream._onmessage(T(n), e, t, r || "", !0), this.setPingTimer()
		},
		_onframeloaded: function() {
			E.info("[Stream] frame loaded (disconnected by server)"), this.connection.onload = null, this.disconnect()
		},
		setPingTimer: function() {
			this.pingtimer && O(this.pingtimer), this.pingtimer = e.setTimeout(A(D, this), this.pushstream.pingtimeout)
		}
	};
	var j = function(e) {
			this.type = j.TYPE, this.pushstream = e, this.connection = null, this.opentimer = null, this.messagesQueue = [], this._linkedInternalListen = A(this._internalListen, this), this.xhrSettings = {
				timeout: this.pushstream.timeout,
				data: {},
				url: null,
				success: A(this.onmessage, this),
				error: A(this.onerror, this),
				load: A(this.onload, this),
				beforeSend: A(this.beforeSend, this),
				afterReceive: A(this.afterReceive, this)
			}
		};
	j.TYPE = "LongPolling", j.prototype = {
		connect: function() {
			this.messagesQueue = [], this._closeCurrentConnection(), this.urlWithBacktrack = k(this.pushstream, this.pushstream.urlPrefixLongpolling, {}, !0), this.urlWithoutBacktrack = k(this.pushstream, this.pushstream.urlPrefixLongpolling, {}, !1), this.xhrSettings.url = this.urlWithBacktrack;
			var t = r.extract_xss_domain(this.pushstream.host),
				n = r.extract_xss_domain(e.location.hostname),
				i = this.pushstream.port,
				s = e.location.port ? Number(e.location.port) : this.pushstream.useSSL ? 443 : 80;
			this.useJSONP = t !== n || i !== s || this.pushstream.useJSONP, this.xhrSettings.scriptId = "PushStreamManager_" + this.pushstream.id, this.useJSONP && (this.pushstream.messagesControlByArgument = !0), this._internalListen(), this.opentimer = e.setTimeout(A(_, this), 100), E.info("[LongPolling] connecting to:", this.xhrSettings.url)
		},
		_listen: function() {
			this._internalListenTimeout && O(this._internalListenTimeout), this._internalListenTimeout = e.setTimeout(this._linkedInternalListen, 100)
		},
		_internalListen: function() {
			this.pushstream._keepConnected && (this.xhrSettings.url = this.pushstream._useControlArguments() ? this.urlWithoutBacktrack : this.urlWithBacktrack, this.xhrSettings.data = u({}, this.pushstream.extraParams(), this.xhrSettings.data, p(this.pushstream)), this.useJSONP ? this.connection = S.jsonp(this.xhrSettings) : this.connection = S.load(this.xhrSettings))
		},
		disconnect: function() {
			this.connection && (E.debug("[LongPolling] closing connection to:", this.xhrSettings.url), this._closeCurrentConnection(), this.pushstream._onclose())
		},
		_closeCurrentConnection: function() {
			this.opentimer = O(this.opentimer);
			if (this.connection) {
				try {
					this.connection.abort()
				} catch (e) {
					try {
						S.clear(this.connection)
					} catch (t) {}
				}
				this.connection = null, this.xhrSettings.url = null
			}
		},
		beforeSend: function(e) {
			this.pushstream.messagesControlByArgument || (e.setRequestHeader("If-None-Match", this.pushstream._etag), e.setRequestHeader("If-Modified-Since", this.pushstream._lastModified))
		},
		afterReceive: function(e) {
			this.pushstream.messagesControlByArgument || (this.pushstream._etag = e.getResponseHeader("Etag"), this.pushstream._lastModified = e.getResponseHeader("Last-Modified")), this.connection = null
		},
		onerror: function(e) {
			this.pushstream._keepConnected && (e === 304 ? this._listen() : (E.info("[LongPolling] error (disconnected by server):", e), this._closeCurrentConnection(), this.pushstream._onerror({
				type: e === 403 || this.pushstream.readyState === I.CONNECTING ? "load" : "timeout"
			})))
		},
		onload: function() {
			this._listen()
		},
		onmessage: function(e) {
			this._internalListenTimeout && O(this._internalListenTimeout), E.info("[LongPolling] message received", e);
			var t = null,
				n = y(e) ? e : e.replace(/\}\{/g, "}\r\n{").split("\r\n");
			for (var i = 0; i < n.length; i++) n[i] && (t = r.parseMessage(n[i], this.pushstream), this.messagesQueue.push(t), this.pushstream.messagesControlByArgument && t.time && (this.pushstream._etag = t.tag, this.pushstream._lastModified = t.time));
			this._listen();
			while (this.messagesQueue.length > 0) {
				var s = this.messagesQueue.shift();
				this.pushstream._onmessage(s.text, s.id, s.channel, s.eventid, this.messagesQueue.length === 0)
			}
		}
	};
	var F = [],
		I = function(t) {
			t = t || {}, this.id = F.push(this) - 1, this.useSSL = t.useSSL || !1, this.host = t.host || e.location.hostname, this.port = Number(t.port || (this.useSSL ? 443 : 80)), this.timeout = t.timeout || 3e4, this.pingtimeout = t.pingtimeout || 3e4, this.reconnectOnTimeoutInterval = t.reconnectOnTimeoutInterval || 3e3, this.reconnectOnChannelUnavailableInterval = t.reconnectOnChannelUnavailableInterval || 6e4, this.lastEventId = t.lastEventId || null, this.messagesPublishedAfter = t.messagesPublishedAfter, this.messagesControlByArgument = t.messagesControlByArgument || !1, this.tagArgument = t.tagArgument || "tag", this.timeArgument = t.timeArgument || "time", this.eventIdArgument = t.eventIdArgument || "eventid", this.useJSONP = t.useJSONP || !1, this._reconnecttimer = null, this._etag = 0, this._lastModified = null, this._lastEventId = null, this.urlPrefixPublisher = t.urlPrefixPublisher || "/pub", this.urlPrefixStream = t.urlPrefixStream || "/sub", this.urlPrefixEventsource = t.urlPrefixEventsource || "/ev", this.urlPrefixLongpolling = t.urlPrefixLongpolling || "/lp", this.urlPrefixWebsocket = t.urlPrefixWebsocket || "/ws", this.jsonIdKey = t.jsonIdKey || "id", this.jsonChannelKey = t.jsonChannelKey || "channel", this.jsonTextKey = t.jsonTextKey || "text", this.jsonTagKey = t.jsonTagKey || "tag", this.jsonTimeKey = t.jsonTimeKey || "time", this.jsonEventIdKey = t.jsonEventIdKey || "eventid", this.modes = (t.modes || "eventsource|websocket|stream|longpolling").split("|"), this.wrappers = [], this.wrapper = null, this.onchanneldeleted = t.onchanneldeleted || null, this.onmessage = t.onmessage || null, this.onerror = t.onerror || null, this.onstatuschange = t.onstatuschange || null, this.extraParams = t.extraParams ||
			function() {
				return {}
			}, this.channels = {}, this.channelsCount = 0, this.channelsByArgument = t.channelsByArgument || !1, this.channelsArgument = t.channelsArgument || "channels";
			for (var n = 0; n < this.modes.length; n++) try {
				var r = null;
				switch (this.modes[n]) {
				case "websocket":
					r = new P(this);
					break;
				case "eventsource":
					r = new H(this);
					break;
				case "longpolling":
					r = new j(this);
					break;
				case "stream":
					r = new B(this)
				}
				this.wrappers[this.wrappers.length] = r
			} catch (i) {
				E.info(i)
			}
			this.readyState = 0
		};
	I.LOG_LEVEL = "error", I.LOG_OUTPUT_ELEMENT_ID = "Log4jsLogOutput", I.CLOSED = 0, I.CONNECTING = 1, I.OPEN = 2, I.prototype = {
		addChannel: function(e, t) {
			if (x(e) !== e) throw "Invalid channel name! Channel has to be a set of [a-zA-Z0-9]";
			E.debug("entering addChannel");
			if (typeof this.channels[e] != "undefined") throw "Cannot add channel " + e + ": already subscribed";
			t = t || {}, E.info("adding channel", e, t), this.channels[e] = t, this.channelsCount++, this.readyState !== I.CLOSED && this.connect(), E.debug("leaving addChannel")
		},
		removeChannel: function(e) {
			this.channels[e] && (E.info("removing channel", e), delete this.channels[e], this.channelsCount--)
		},
		removeAllChannels: function() {
			E.info("removing all channels"), this.channels = {}, this.channelsCount = 0
		},
		_setState: function(e) {
			this.readyState !== e && (E.info("status changed", e), this.readyState = e, this.onstatuschange && this.onstatuschange(this.readyState))
		},
		connect: function() {
			E.debug("entering connect");
			if (!this.host) throw "PushStream host not specified";
			if (isNaN(this.port)) throw "PushStream port not specified";
			if (!this.channelsCount) throw "No channels specified";
			if (this.wrappers.length === 0) throw "No available support for this browser";
			this._keepConnected = !0, this._lastUsedMode = 0, this._connect(), E.debug("leaving connect")
		},
		disconnect: function() {
			E.debug("entering disconnect"), this._keepConnected = !1, this._disconnect(), this._setState(I.CLOSED), E.info("disconnected"), E.debug("leaving disconnect")
		},
		_useControlArguments: function() {
			return this.messagesControlByArgument && (this._lastModified !== null || this._lastEventId !== null)
		},
		_connect: function() {
			this._lastEventId === null && (this._lastEventId = this.lastEventId);
			if (this._lastModified === null) {
				var e = this.messagesPublishedAfter;
				if (!w(e)) {
					var t = Number(this.messagesPublishedAfter);
					t > 0 ? (e = new Date, e.setTime(e.getTime() - t * 1e3)) : t < 0 && (e = new Date(0))
				}
				w(e) && (this._lastModified = r.dateToUTCString(e))
			}
			this._disconnect(), this._setState(I.CONNECTING), this.wrapper = this.wrappers[this._lastUsedMode++ % this.wrappers.length];
			try {
				this.wrapper.connect()
			} catch (n) {
				this.wrapper && this.wrapper.disconnect()
			}
		},
		_disconnect: function() {
			this._reconnecttimer = O(this._reconnecttimer), this.wrapper && this.wrapper.disconnect()
		},
		_onopen: function() {
			this._reconnecttimer = O(this._reconnecttimer), this._setState(I.OPEN), this._lastUsedMode > 0 && this._lastUsedMode--
		},
		_onclose: function() {
			this._reconnecttimer = O(this._reconnecttimer), this._setState(I.CLOSED), this._reconnect(this.reconnectOnTimeoutInterval)
		},
		_onmessage: function(e, t, n, r, i) {
			E.debug("message", e, t, n, r, i), t === -2 ? this.onchanneldeleted && this.onchanneldeleted(n) : t > 0 && this.onmessage && this.onmessage(e, t, n, r, i)
		},
		_onerror: function(e) {
			this._setState(I.CLOSED), this._reconnect(e.type === "timeout" ? this.reconnectOnTimeoutInterval : this.reconnectOnChannelUnavailableInterval), this.onerror && this.onerror(e)
		},
		_reconnect: function(t) {
			this._keepConnected && !this._reconnecttimer && this.readyState !== I.CONNECTING && (E.info("trying to reconnect in", t), this._reconnecttimer = e.setTimeout(A(this._connect, this), t))
		},
		sendMessage: function(e, t, n) {
			e = x(e), this.wrapper.type === P.TYPE ? (this.wrapper.sendMessage(e), t && t()) : S.post({
				url: L(this),
				data: e,
				success: t,
				error: n
			})
		}
	}, I.sendMessage = function(e, t, n, r) {
		S.post({
			url: e,
			data: x(t),
			success: n,
			error: r
		})
	}, I.register = function(e) {
		var t = e.window.location.href.match(/streamid=([0-9]*)&?/);
		t[1] && F[t[1]] && F[t[1]].wrapper.register(e)
	}, I.unload = function() {
		for (var e = 0; e < F.length; e++) try {
			F[e].disconnect()
		} catch (t) {}
	}, e.PushStream = I, e.PushStreamManager = F, e.attachEvent && e.attachEvent("onunload", I.unload), e.addEventListener && e.addEventListener.call(e, "unload", I.unload, !1)
}(window, document), define("vendors/pushstream", function(e) {
	return function() {
		var t, n;
		return t || e.PushStream
	}
}(this)), define("pages/main/informers/QuotesInformer", ["BackboneX", "underscore", "vendors/pushstream", "global/errorReporter"], function(e, t, n, r) {
	var i = e.View.extend({
		_initProperties: function() {
			this._super(), this._pushstream = null, this._cacheQuotes = {}, this._classTrendUp = this._class("trend", "up"), this._classTrendDown = this._class("trend", "down")
		},
		_selectors: function() {
			return t.defaults({
				quote: ".js-quote-%s",
				bid: ".js-bid-%s",
				ask: ".js-ask-%s",
				spread: ".js-spread-%s"
			}, this._super())
		},
		_classes: function() {
			return t.defaults({
				trend: "main__quote_arrow_%s"
			}, this._super())
		},
		initialize: function() {
			this._super(), this._initPushStream()
		},
		_initPushStream: function() {
			var e = this._data.subscriber,
				t = this._data.pushstream;
			this._createConnection({
				host: e.web_socket.parts.host,
				jsonTextKey: "data",
				urlPrefixLongpolling: e.long_polling.parts.path + "?id=" + e.long_polling.parts.channelAlias,
				urlPrefixWebsocket: e.web_socket.parts.path + "?id=" + e.web_socket.parts.channelAlias,
				modes: "websocket|longpolling",
				port: e.web_socket.parts.port,
				useSSL: e.web_socket.parts.scheme == "wss" ? !0 : !1
			}, t)
		},
		_initFakeData: function() {
			setInterval(this._sendFakeData.bind(this), 500)
		},
		_sendFakeData: function() {
			var e = this._getFakeData();
			this._onMessage(e.data)
		},
		_getFakeData: function() {
			var e = ["USDRUB", "EURUSD", "XAUUSD", "XAGUSD", "SPX500", "DAX30"];
			return {
				id: +(new Date) + "" + Math.random(),
				data: {
					symbol: e[Math.floor(Math.random() * e.length)],
					ask: Math.floor(Math.random() * 1e5) / 1e4,
					bid: Math.floor(Math.random() * 1e5) / 1e4,
					spread: Math.floor(Math.random() * 1e4) / 1e3
				}
			}
		},
		_getFromCache: function(e, t) {
			return this._cacheQuotes[e] && this._cacheQuotes[e][t] ? this._cacheQuotes[e][t] : null
		},
		_createConnection: function(e, t) {
			try {
				var i = this._pushstream = new n(e);
				i.onmessage = this._onMessage.bind(this), i.addChannel(t), i.connect()
			} catch (s) {
				r(s)
			}
		},
		_onMessage: function(e) {
			var t = e.symbol.toLowerCase().replace("#", "");
			["ask", "bid"].forEach(function(n) {
				this._updateQuote(n, t, e)
			}, this), this._updateSpread(t, e.spread)
		},
		_updateSpread: function(e, t) {
			var n = this._elem("spread", e);
			n.text(t)
		},
		_saveToCache: function(e, t, n, r) {
			this._cacheQuotes[e] || (this._cacheQuotes[e] = {}), this._cacheQuotes[e] = {
				value: n,
				el: r
			}
		},
		_getElems: function(e, t) {
			var n = [],
				r = this._findElem(e, t);
			return r.each(function(e, t) {
				n.push(t)
			}), n
		},
		_updateQuote: function(e, t, n) {
			var r = this._getFromCache(t, e),
				i = r ? r.el : this._getElems(e, t),
				s = parseFloat(n[e]);
			if (!i[0]) return;
			var o = r ? r.value : parseFloat(i[0].textContent);
			this._removeClasses(i);
			var u = this._updateDirection(o, s, i);
			this._saveToCache(t, e, s, u)
		},
		_removeClasses: function(e) {
			e.forEach(function(e) {
				e.classList.remove(this._classTrendUp, this._classTrendDown)
			}, this)
		},
		_updateDirection: function(e, t, n) {
			var r = t > e ? "up" : "down",
				i = this._class("trend", r);
			return n.map(this._updateNode.bind(this, i, t))
		},
		_updateNode: function(e, t, n) {
			var r = n.cloneNode(!0, !0);
			return r.classList.add(e), r.textContent = t, n.parentNode.replaceChild(r, n), r
		}
	});
	return i
}), define("global/elements/PromoBlock/PromoBlockSlide", ["underscore", "BackboneX", "global/userProfile"], function(e, t, n) {
	var r = t.View.extend({
		_classes: function() {
			return e.defaults({
				active: "promoblock__item_active_yes",
				moving: "promoblock__item_moving_yes"
			}, this._super())
		},
		_initProperties: function() {
			this._super(), this._startParams = this.options.startParams, this._hideParams = this.options.hideParams
		},
		stopAnimation: function() {
			return this.$el.stop(!0, !0), this
		},
		setAsBackground: function() {
			return this.$el.removeClass(this._class("active")).addClass(this._class("moving")), this
		},
		setAsActive: function() {
			return this.$el.addClass(this._class("active")).removeClass(this._class("moving")), this
		},
		toStartState: function(e, t) {
			var r = this._startParams;
			return e ? this.$el.animate(r, n.get("PROMOBLOCK_ANIMATION_DELAY"), t) : this.$el.css(r), this
		},
		animatedRemove: function(e, t) {
			return this.$el.animate(this._hideParams, e, t), this
		},
		hide: function() {
			return this.$el.removeClass(this._class("active")).removeClass(this._class("moving")), this
		},
		move: function(e) {
			var t = this.$el[0].style,
				n = parseInt(t.left, 10) || 0;
			t.left = n + e + "px"
		},
		setHideParams: function(e) {
			return this._hideParams = e, this
		}
	});
	return r
}), define("global/elements/PromoBlock/PromoBlockWithTouch", ["vendors/Backbone/Mixin", "global/elements/DragAndDrop/Dragging"], function(e, t) {
	var n = 150,
		r = 3,
		i = 500,
		s = new e({
			dependencies: [t]
		}, {
			_selectors: function() {
				var e = this._super();
				return e.movingElement = e.item, e.promoblockLink = "a", e
			},
			_initProperties: function() {
				this._super(), this._lastDx = null, this._backgroundSlide = null, this._movingSlide = null, this._preventClickLink = !1, this._startMovingDate = 0, this._bidirectionalMoving = !1, this._allowVerticalScroll = !0
			},
			_startSlideParams: {
				left: 0
			},
			_hideSlideParams: {
				left: 0
			},
			_onItemsInited: function() {
				this._super(), this._findElem("promoblockLink").on("click", this._onClickLink.bind(this))
			},
			_onClickLink: function(e) {
				this._preventClickLink && (this._preventClickLink = !1, e.preventDefault())
			},
			_onPointerDown: function(e) {
				this._super(e), this._animatedSlide && (this._animatedSlide.stopAnimation(), this._animatedSlide = null), this._backgroundSlide = null
			},
			_startMoving: function() {
				this._super(), this.stop(), this._movingSlide = this._getCurrentSlide(), this._startMovingDate = new Date, this._bidirectionalMoving = !1
			},
			_move: function(e, t, n, i) {
				this._super(), this._bidirectionalMoving = this._bidirectionalMoving || e * n < 0, this._checkDirection(n), this._lastDx = e, this._movingSlide.move(e);
				if (this._preventClickLink) return;
				this._preventClickLink = Math.abs(n) > r || Math.abs(i) > r
			},
			_endMoving: function(e, t, r) {
				this._super(e, t, r), this._touchChange = !0, !this._bidirectionalMoving && new Date - this._startMovingDate <= i || this._lastDx * r >= 0 && Math.abs(r) > n ? (this._checkDirection(r), r > 0 ? this.prev() : this.next()) : (this._animatedSlide = this._movingSlide, this._movingSlide.toStartState(!0)), this.play(), this._movingSlide = null, this._touchChange = !1, setTimeout(function() {
					this._preventClickLink = !1
				}.bind(this), 500)
			},
			_checkDirection: function(e) {
				this._items.forEach(function(e, t) {
					if (this._current === t) return;
					e.hide()
				}, this), this._backgroundSlide = e > 0 ? this._getPrevSlide() : this._getNextSlide(), this._backgroundSlide.setAsBackground().toStartState()
			},
			_getLeftOffsetToHide: function(e, t) {
				var n = e.$el.width(),
					r;
				if (this._items.length == 2 && (r = e.$el.offset().left)) return r > 0 ? n : -n;
				if (!this._touchChange) return -n;
				var i = this._items.indexOf(e),
					s = this._items.indexOf(t);
				return i == this._last && s === 0 ? -n : i === 0 && s == this._last ? n : s < i ? n : -n
			},
			_changeSlide: function(e, t, n) {
				e.setHideParams({
					left: this._getLeftOffsetToHide(e, t)
				}), this._super(e, t, n)
			},
			_getPrevSlide: function() {
				var e = this._current - 1;
				return this._items[e < 0 ? this._last : e]
			},
			_getNextSlide: function() {
				var e = this._current + 1;
				return this._items[e > this._last ? 0 : e]
			}
		});
	return s
}), define("vendors/Modernizr/modernizr.touch", ["jquery", "Modernizr"], function(e, t) {
	return t.addTest({
		touch: "ontouchstart" in document || window.navigator.msMaxTouchPoints > 0
	}), t
}), define("global/elements/PromoBlock/PromoBlock", ["underscore", "jquery", "BackboneX", "./PromoBlockSlide", "global/userProfile", "./PromoBlockWithTouch", "Modernizr", "vendors/Modernizr/modernizr.touch"], function(e, t, n, r, i, s, o) {
	var u = n.View.extend({
		_classes: function() {
			return e.defaults({
				controlActive: "promoblock__control_state_active",
				itemActive: "promoblock__item_active_yes"
			}, this._super())
		},
		_selectors: function() {
			return e.defaults({
				control: ".promoblock__control",
				controls: ".promoblock__controls",
				item: ".promoblock__item",
				items: ".promoblock__items",
				next: ".promoblock__arrow_moving_r",
				noScript: "noscript",
				prev: ".promoblock__arrow_moving_l"
			}, this._super())
		},
		events: function() {
			var e = this._super();
			return e["click " + this._selector("next")] = this._onNextClick, e["click " + this._selector("prev")] = this._onPrevClick, e["click " + this._selector("control")] = this._onControlClick, e["mouseenter " + this._selector("items")] = this._onItemsMouseEnter, e["mouseleave " + this._selector("items")] = this._onItemsMouseLeave, e.keydown = this._onKeydown, e
		},
		_initProperties: function() {
			this._super(), this._INTERVAL_DELAY = this._data.intervalDelay || 7e3, this._STOP_AFTER_INTERACTION = !! this._data.stopAfterInteraction, this._items = [], this._current = this._elem("control").index(this._elem("controlActive")), this._last = null, this._changingSlideTime = null, this._playable = this._data.playable, this._playable = e.isUndefined(this._playable) ? !0 : this._playable, this._playTimeoutId = -1, this._pausedAfterMouseInteraction = !1, this._animatedSlide = null
		},
		_startSlideParams: {
			opacity: 1
		},
		_hideSlideParams: {
			opacity: 0
		},
		initialize: function() {
			this._super(), setTimeout(function() {
				this._initImages(), this._initItems(), this._tryToPlay(), this._onItemsInited()
			}.bind(this), 0)
		},
		_onItemsInited: function() {},
		_initImages: function() {
			var e = this._elem("items"),
				t = e.html().replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/<noscript>/g, "").replace(/<\/noscript>/g, "");
			e.html(t)
		},
		_initItems: function() {
			this._elem("item").each(this._initItem.bind(this)), this._last = this._items.length - 1
		},
		_initItem: function(e, t) {
			this._items.push(new r({
				el: t,
				startParams: this._startSlideParams,
				hideParams: this._hideSlideParams
			}))
		},
		_onItemsMouseEnter: function() {
			if (!this._playable) return;
			this.stop(), this._pausedAfterMouseInteraction = !0
		},
		_onItemsMouseLeave: function() {
			if (!this._pausedAfterMouseInteraction) return;
			this.play(), this._pausedAfterMouseInteraction = !1
		},
		_onKeydown: function(e) {
			switch (e.which) {
			case this._KEYS.LEFT:
				this.prev(), this.$el.focus();
				break;
			case this._KEYS.RIGHT:
				this.next(), this.$el.focus()
			}
		},
		play: function() {
			return this._playable = !0, clearTimeout(this._playTimeoutId), this._playTimeoutId = setTimeout(this.next.bind(this), this._INTERVAL_DELAY), this
		},
		stop: function() {
			return this._playable = !1, clearTimeout(this._playTimeoutId), this
		},
		_onControlClick: function(e) {
			this._STOP_AFTER_INTERACTION && this.stop();
			var n = t(e.currentTarget).data("index");
			this._setSlide(n)
		},
		_onNextClick: function() {
			this._STOP_AFTER_INTERACTION && this.stop(), this.next()
		},
		_onPrevClick: function() {
			this._STOP_AFTER_INTERACTION && this.stop(), this.prev()
		},
		next: function() {
			return this._setSlide(this._current + 1), this
		},
		prev: function() {
			return this._setSlide(this._current - 1), this
		},
		_setSlide: function(e) {
			if (this._current === e) return;
			var t = this._getCurrentSlide();
			this._current = e > this._last ? 0 : e < 0 ? this._last : e;
			var n = this._getCurrentSlide();
			this._updateActiveControls(), this._changeSlide(t, n, this._onChangeSlide.bind(this))
		},
		_updateChangingSlideTime: function() {
			var e = i.get("PROMOBLOCK_ANIMATION_DELAY");
			return this._changingSlideTime && Date.now() - this._changingSlideTime < e && (e = 0), this._changingSlideTime = Date.now(), e
		},
		_tryToPlay: function() {
			this._playable && this.play()
		},
		_onChangeSlide: function() {
			this._tryToPlay()
		},
		_changeSlide: function(e, t, n) {
			var r = this._updateChangingSlideTime();
			this._animatedSlide && this._animatedSlide.stopAnimation(), this._animatedSlide = e, t.setAsBackground().toStartState(), e.animatedRemove(r, function() {
				e.hide(), t.setAsActive(), n()
			})
		},
		_updateActiveControls: function() {
			if (this._elem("control").length <= 1) return;
			this._elem("control").removeClass(this._class("controlActive")).eq(this._current).addClass(this._class("controlActive"))
		},
		_getCurrentSlide: function() {
			return this._items[this._current]
		}
	});
	return o.touch && (u = u.mix(s)), u
}), define("global/PageClasses/PageWithPromoBlocks", ["jquery", "underscore", "vendors/Backbone/Mixin", "global/elements/PromoBlock/PromoBlock"], function(e, t, n, r) {
	var i = new n({
		_selectors: function() {
			return t.defaults({
				promoblock: ".promoblock_active_yes"
			}, this._super())
		},
		_initProperties: function() {
			this._super(), this._promoBlocks = []
		},
		initialize: function() {
			this._super(), this._initPromoBlock()
		},
		_initPromoBlock: function() {
			this._elem("promoblock").each(function(e, t) {
				this._promoBlocks.push(new r({
					el: t
				}))
			}.bind(this))
		},
		getPromoBlock: function(e) {
			return this._promoBlocks[e]
		}
	});
	return i
}), define("elements/NewsInformer/NewsInformer", ["underscore", "jquery", "BackboneX", "global/elements/Queries/Connection", "global/elements/Queries/WithErrorHandling"], function(e, t, n, r, i) {
	var s = 6e3,
		o = 500,
		u = n.View.mix(i).extend({
			_selectors: function() {
				return e.defaults({
					newsList: ".main__news-informer-content .main__news-informer-list",
					lastVisibleNewsItem: ".main__news-informer-content .main__news-informer-item:visible:last",
					currentNews: ".main__news-informer-content .main__news-informer-item_release_next",
					nextNews: ".main__news-informer-content .main__news-informer-item_release_after",
					newsListFlags: ".main__news-informer-flag-content  .main__news-informer-flag-list",
					lastVisibleNewsItemFlags: ".main__news-informer-flag-content  .main__news-informer-flag-item:visible:last",
					currentNewsFlags: ".main__news-informer-flag-content  .main__news-informer-flag-item_release_next",
					nextNewsFlags: ".main__news-informer-flag-content  .main__news-informer-flag-item_release_after"
				}, this._super())
			},
			_classes: function() {
				return e.defaults({
					noVisible: "main__news-informer-item_visible_no"
				}, this._super())
			},
			_initProperties: function() {
				this._super(), this._timer = this.options.timer, this._newsAnimationTimeoutId = null, this._connection = new r
			},
			initialize: function() {
				this._super(), this._handleNewsItems(), this._initTimer(), this._initConnection()
			},
			_handleNewsItems: function() {
				this._elem("currentNews").length > 1 && this._runNewsAnimation()
			},
			_runNewsAnimation: e.method.bind(function() {
				var e = this._findElem("lastVisibleNewsItem"),
					t = this._findElem("lastVisibleNewsItemFlags");
				clearTimeout(this._newsAnimationTimeoutId), e.fadeTo(o / 2, 0, this._onAnimationEnd.bind(this, this._elem("newsList"), e, !0)), t.fadeTo(o, 0, this._onAnimationEnd.bind(this, this._elem("newsListFlags"), t)), this._newsAnimationTimeoutId = setTimeout(this._runNewsAnimation, s)
			}),
			_stopNewsAnimation: function() {
				clearTimeout(this._newsAnimationTimeoutId)
			},
			_onAnimationEnd: e.method.bind(function(e, t, n) {
				e.prepend(t), t.css("opacity", 1), n && (t.addClass(this._class("noVisible")), this._findElem("lastVisibleNewsItem").removeClass(this._class("noVisible")).css("display", "none").fadeIn(o / 2))
			}),
			_initTimer: function() {
				this._timer.on("end", this._onTimerEnd, this)
			},
			_onTimerEnd: function() {
				t.when(this._elem("newsList").promise).then(this._changeNews)
			},
			_changeNews: e.method.bind(function() {
				var e = this._findElem("currentNews");
				e.not(e[0]).remove(), this._elem("nextNews").show().appendTo(this._elem("newsList")), this._runNewsAnimation(), t.when(this._elem("newsList").promise).then(function() {
					e.remove(), this._stopNewsAnimation(), this._updateNewsList(), this._timer.start(parseInt(this._elem("newsList").data("remainingTime"), 10))
				}.bind(this))
			}),
			_updateNewsList: function() {
				this._connection.query("list")
			},
			_initConnection: function() {
				this._connection.setUrl("list", this._data.url).on("list:success", this._onGetListSuccess, this).on("list:error", this._processError, this)
			},
			_onGetListSuccess: function(e) {
				this._replaceElem("newsList", e), this._dropElemCache(), this._handleNewsItems()
			}
		});
	return u
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
	def: "easeOutQuad",
	swing: function(e, t, n, r, i) {
		return this[this.def](e, t, n, r, i)
	},
	easeInQuad: function(e, t, n, r, i) {
		return r * (t /= i) * t + n
	},
	easeOutQuad: function(e, t, n, r, i) {
		return -r * (t /= i) * (t - 2) + n
	},
	easeInOutQuad: function(e, t, n, r, i) {
		return (t /= i / 2) < 1 ? r / 2 * t * t + n : -r / 2 * (--t * (t - 2) - 1) + n
	},
	easeInCubic: function(e, t, n, r, i) {
		return r * (t /= i) * t * t + n
	},
	easeOutCubic: function(e, t, n, r, i) {
		return r * ((t = t / i - 1) * t * t + 1) + n
	},
	easeInOutCubic: function(e, t, n, r, i) {
		return (t /= i / 2) < 1 ? r / 2 * t * t * t + n : r / 2 * ((t -= 2) * t * t + 2) + n
	},
	easeInQuart: function(e, t, n, r, i) {
		return r * (t /= i) * t * t * t + n
	},
	easeOutQuart: function(e, t, n, r, i) {
		return -r * ((t = t / i - 1) * t * t * t - 1) + n
	},
	easeInOutQuart: function(e, t, n, r, i) {
		return (t /= i / 2) < 1 ? r / 2 * t * t * t * t + n : -r / 2 * ((t -= 2) * t * t * t - 2) + n
	},
	easeInQuint: function(e, t, n, r, i) {
		return r * (t /= i) * t * t * t * t + n
	},
	easeOutQuint: function(e, t, n, r, i) {
		return r * ((t = t / i - 1) * t * t * t * t + 1) + n
	},
	easeInOutQuint: function(e, t, n, r, i) {
		return (t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + n : r / 2 * ((t -= 2) * t * t * t * t + 2) + n
	},
	easeInSine: function(e, t, n, r, i) {
		return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
	},
	easeOutSine: function(e, t, n, r, i) {
		return r * Math.sin(t / i * (Math.PI / 2)) + n
	},
	easeInOutSine: function(e, t, n, r, i) {
		return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
	},
	easeInExpo: function(e, t, n, r, i) {
		return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
	},
	easeOutExpo: function(e, t, n, r, i) {
		return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
	},
	easeInOutExpo: function(e, t, n, r, i) {
		return t == 0 ? n : t == i ? n + r : (t /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + n : r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
	},
	easeInCirc: function(e, t, n, r, i) {
		return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
	},
	easeOutCirc: function(e, t, n, r, i) {
		return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
	},
	easeInOutCirc: function(e, t, n, r, i) {
		return (t /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + n : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
	},
	easeInElastic: function(e, t, n, r, i) {
		var s = 1.70158,
			o = 0,
			u = r;
		if (t == 0) return n;
		if ((t /= i) == 1) return n + r;
		o || (o = i * .3);
		if (u < Math.abs(r)) {
			u = r;
			var s = o / 4
		} else var s = o / (2 * Math.PI) * Math.asin(r / u);
		return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n
	},
	easeOutElastic: function(e, t, n, r, i) {
		var s = 1.70158,
			o = 0,
			u = r;
		if (t == 0) return n;
		if ((t /= i) == 1) return n + r;
		o || (o = i * .3);
		if (u < Math.abs(r)) {
			u = r;
			var s = o / 4
		} else var s = o / (2 * Math.PI) * Math.asin(r / u);
		return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n
	},
	easeInOutElastic: function(e, t, n, r, i) {
		var s = 1.70158,
			o = 0,
			u = r;
		if (t == 0) return n;
		if ((t /= i / 2) == 2) return n + r;
		o || (o = i * .3 * 1.5);
		if (u < Math.abs(r)) {
			u = r;
			var s = o / 4
		} else var s = o / (2 * Math.PI) * Math.asin(r / u);
		return t < 1 ? -0.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n : u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n
	},
	easeInBack: function(e, t, n, r, i, s) {
		return s == undefined && (s = 1.70158), r * (t /= i) * t * ((s + 1) * t - s) + n
	},
	easeOutBack: function(e, t, n, r, i, s) {
		return s == undefined && (s = 1.70158), r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n
	},
	easeInOutBack: function(e, t, n, r, i, s) {
		return s == undefined && (s = 1.70158), (t /= i / 2) < 1 ? r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n : r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n
	},
	easeInBounce: function(e, t, n, r, i) {
		return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n
	},
	easeOutBounce: function(e, t, n, r, i) {
		return (t /= i) < 1 / 2.75 ? r * 7.5625 * t * t + n : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
	},
	easeInOutBounce: function(e, t, n, r, i) {
		return t < i / 2 ? jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n : jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n
	}
}), define("vendors/jquery/plugins/jquery.easing", function() {}), define("elements/Timer/TimerHHMMSSView", ["underscore", "./AbstractTimer", "vendors/jquery/plugins/jquery.backgroundPosition", "vendors/jquery/plugins/jquery.easing"], function(e, t) {
	var n = t.extend({
		_selectors: function() {
			return e.defaults({
				hhDigits: ".main__timer-num_hr_dec,.main__timer-num_hr_unit",
				mmDigits: ".main__timer-num_min_dec,.main__timer-num_min_unit",
				ssDigits: ".main__timer-num_sec_dec,.main__timer-num_sec_unit",
				number: ".main__timer-num"
			}, this._super())
		},
		_initProperties: function() {
			this._super(), this._animationType = "easeInOutBack", this._hhmmss = null, this._prevHhmmss = null, this._digitHeight = this._elem("hhDigits").height(), this._currentTime = 0, this._startTime = 0, this._updateDigitStrategy = this.options.updateDigitStrategy;
			if (!this._updateDigitStrategy) throw new Error("TimerHHMMSSView needs an updateDigitsStrategy")
		},
		initialize: function() {
			this._super(), this._data.remainingTime && this.start(this._data.remainingTime)
		},
		start: function(e) {
			return this._startTime = this._currentTime = e, this._super()
		},
		_updateDigitsPositions: function() {
			e.each(this._hhmmss, this._updateDigitsPairPositions, this)
		},
		_updateDigitsPairPositions: function(e, t) {
			var n;
			for (var r = 0; r < e.length; r++) {
				n = e[r];
				if (this._prevHhmmss[t][r] === n) continue;
				this._updateDigit(this._elem(t + "Digits").eq(r), n)
			}
		},
		_updateDigit: function(e, t) {
			this._updateDigitStrategy(e, t)
		},
		_secondsToHHMMSS: function(e) {
			var t = Math.floor(e / 3600),
				n = Math.floor((e - t * 3600) / 60),
				r = e - t * 3600 - n * 60;
			return {
				hh: this._numberToArray(t),
				mm: this._numberToArray(n),
				ss: this._numberToArray(r)
			}
		},
		_numberToArray: function(e) {
			return e > 9 ? [Math.floor(e / 10), e % 10] : [0, e]
		},
		_tick: function(e) {
			this._currentTime = this._startTime - Math.round((this._currentClientTime - this._startClientTime) / this._STEP), this._hhmmss = this._secondsToHHMMSS(this._currentTime), this._prevHhmmss = this._prevHhmmss || this._hhmmss, this._updateDigitsPositions(), this._prevHhmmss = this._hhmmss, this._super(e)
		},
		getHHMMSS: function() {
			return this._hhmmss
		},
		_isTimerEnded: function() {
			return this._currentTime === 0
		}
	});
	return n
}), define("elements/NewsInformer/WithNewsInformer", ["underscore", "jquery", "vendors/Backbone/Mixin", "elements/NewsInformer/NewsInformer", "elements/Timer/TimerHHMMSSView"], function(e, t, n, r, i) {
	var s = new n({
		_selectors: function() {
			return e.defaults({
				newsInformer: ".main__news-informer",
				newsInformerTimer: ".main__news-informer .main__timer"
			}, this._super())
		},
		_initProperties: function() {
			this._super(), this._newsInformer = null, this._newsInformerTimer = null
		},
		initialize: function() {
			this._super(), this._initNewsInformer()
		},
		_initNewsInformer: function() {
			this._newsInformerTimer = new i({
				el: this._elem("newsInformerTimer"),
				updateDigitStrategy: this._getNewsInformerTimerUpdateDigitStrategy()
			}), this._newsInformer = new r({
				el: this._elem("newsInformer"),
				timer: this._newsInformerTimer
			})
		},
		_getNewsInformerTimerUpdateDigitStrategy: function() {
			throw new Error("Implement _getNewsInformerTimerUpdateDigitStrategy")
		}
	});
	return s
}), define("pages/main/alpari_cashback/AlpariCashbackModel", ["BackboneX", "underscore", "vendors/pushstream", "global/errorReporter"], function(e, t, n, r) {
	var i = e.Model.extend({
		defaults: function() {
			return {
				count: 0
			}
		},
		_initProperties: function() {
			this._super(), this._pushstream = null, this._countMessages = 0
		},
		createConnection: function(e, t) {
			try {
				var i = this._pushstream = new n(e);
				i.onmessage = this._onMessage.bind(this), i.addChannel(t), i.connect()
			} catch (s) {
				r(s)
			}
			return this
		},
		_onMessage: function(e) {
			this._countMessages = ++this._countMessages, e.newDiscount === 1 && this.set({
				count: this.get("count") + 1
			})
		}
	});
	return i
}), define("pages/main/alpari_cashback/AlpariCashbackView", ["BackboneX", "underscore", "./AlpariCashbackModel"], function(e, t, n) {
	var r = 400,
		i = e.View.extend({
			_classes: function() {
				return t.defaults({
					animationEnd: "scoreboard__cell_animation_end",
					animationStart: "scoreboard__cell_animation_start",
					cellValue: "scoreboard__cell_value_%s"
				}, this._super())
			},
			_selectors: function() {
				return t.defaults({
					valueByNumber: ".js-value-%s"
				}, this._super())
			},
			initialize: function() {
				this._super(), this._data.subscriber && this._initModel()
			},
			_initModel: function() {
				var e = this._data.subscriber,
					t = this._data.pushstream;
				this.model = new n({
					count: this.$el.data("value")
				}), this.model.createConnection({
					host: e.web_socket.parts.host,
					jsonTextKey: "data",
					urlPrefixLongpolling: e.long_polling.parts.path + "?id=" + e.long_polling.parts.channelAlias,
					urlPrefixWebsocket: e.web_socket.parts.path + "?id=" + e.web_socket.parts.channelAlias,
					modes: "websocket|longpolling",
					port: e.web_socket.parts.port,
					useSSL: e.web_socket.parts.scheme == "wss" ? !0 : !1
				}, t), this.model.on("change", this.render, this)
			},
			render: function(e) {
				var t = e.get("count").toString().split(""),
					n = e.previous("count").toString().split("");
				for (var i = 0; i < t.length; i++) {
					if (t[i] === n[i]) continue;
					var s = this._elem("valueByNumber", i);
					this._removeClass("animationEnd", s), this._addClass("animationStart", s), this._removeClass(["cellValue", n[i]], s), this._addClass(["cellValue", t[i]], s), setTimeout(this._removeAnimation.bind(this, s), r)
				}
			},
			_removeAnimation: function(e) {
				this._removeClass("animationStart", e), this._addClass("animationEnd", e)
			}
		});
	return i
}), define("pages/main/alpari_cashback/PageWithAlpariCashback", ["underscore", "vendors/Backbone/Mixin", "./AlpariCashbackView"], function(e, t, n) {
	var r = new t({
		_selectors: function() {
			return e.defaults({
				pushNotificator: ".js-alpari-cashback"
			}, this._super())
		},
		initialize: function() {
			this._super(), this._initPushNotifications()
		},
		_initPushNotifications: function() {
			var e = new n({
				el: this._elem("pushNotificator")
			});
			this._getServiceManager().setService("pushNotificator", e)
		}
	});
	return r
}), require(["underscore", "jquery", "elements/VideoSchedule/CoursesListHelper", "pages/all/ProjectPage", "elements/VideoSchedule/VideoScheduleJW", "global/elements/Popup/PopupWithForm", "elements/VideoSchedule/CourseReminderForm", "elements/Timer/contentUpdateDigitStrategy", "global/elements/Loader", "PageClasses/WithUserService", "global/elements/Slider/Slider", "pages/main/informers/QuotesInformer", "global/PageClasses/PageWithPromoBlocks", "elements/NewsInformer/WithNewsInformer", "global/PageClasses/PageWithPromoBlocks", "elements/NewsInformer/WithNewsInformer", "pages/main/alpari_cashback/PageWithAlpariCashback"], function(e, t, n, r, i, s, o, u, a, f, l, c) {
	r.mixArguments(arguments).extend({
		_selectors: function() {
			return e.defaults({
				videoCoursesLoader: ".js-courses-list .loader",
				videoSchedule: ".js-video-schedule",
				paymentsSlider: ".slider_type_payments",
				pushQuotes: ".js-quotes-informer",
				headerButtons: ".header__action",
				promoblockLink: ".promoblock__link",
				promoblockButton: ".promoblock__button",
				streamListFirstElem: ".stream__course-list li:first"
			}, this._super())
		},
		_initProperties: function() {
			this._super(), this._paymentsSlider = null
		},
		initialize: function() {
			this._super(), this._initVideoSchedule(), this._initSlider(), this._initQuotesInformer()
		},
		_getNewsInformerTimerUpdateDigitStrategy: function() {
			return u
		},
		_initVideoSchedule: function() {
			if (this._elem("videoSchedule").length) {
				var e = this._elem("videoCoursesLoader"),
					n = new a({
						el: e
					}),
					r = function() {
						n.showLoading(), t.ajax({
							url: e.data("coursesUrl"),
							success: function(t) {
								var n = t.courses,
									r = this.prepareCoursesList(n);
								e.replaceWith(r), n.lenght || e.replaceWith("empty"), this._videoSchedule = new i({
									el: this._elem("videoSchedule")
								})
							},
							error: function() {
								n.showFail()
							},
							context: this
						})
					}.bind(this);
				n.on("reload", r, this), r()
			}
		},
		_addToAnalytics: function(e) {
			e.preventDefault();
			var n = t(e.currentTarget),
				r = "|" + this._getParameterByName("?", n.attr("href")),
				i = n.attr("class") ? n.attr("class").trim().split(" ") : "";
			this._pushDataLayer("button", "click", n.text(), i[i.length - 1] + r), window.location.replace(n.attr("href"))
		},
		_pushDataLayer: function(e, t, n, r) {
			dataLayer && dataLayer.push({
				event: e,
				eventCategory: t,
				eventAction: n,
				eventLabel: r
			})
		},
		_getParameterByName: function(e, t) {
			t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
			var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
				r = n.exec(t);
			return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null
		},
		_initQuotesInformer: function() {
			var e = new c({
				el: this._elem("pushQuotes")
			})
		},
		_getPopupsConfig: function() {
			return e({
				courseReminder: {
					type: s,
					options: {
						FormClass: o
					}
				}
			}).defaults(this._super())
		},
		_initSlider: function() {
			this._paymentsSlider = new l({
				el: this._elem("paymentsSlider")
			})
		}
	})
}), define("deb73c03ca67d3df04d3e4fbcc7e2a3c", function() {});