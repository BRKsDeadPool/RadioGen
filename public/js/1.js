webpackJsonp([1],{258:function(t,e,n){function a(t){return n(i(t))}function i(t){var e=o[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var o={"./rFooter/index":271,"./rFooter/index.vue":271,"./rPagination/index":272,"./rPagination/index.vue":272,"./rPlayer/index":273,"./rPlayer/index.vue":273};a.keys=function(){return Object.keys(o)},a.resolve=i,t.exports=a,a.id=258},271:function(t,e,n){var a=n(171)(n(291),n(340),null,null);t.exports=a.exports},272:function(t,e,n){var a=n(171)(n(292),n(358),null,null);t.exports=a.exports},273:function(t,e,n){var a=n(171)(n(293),n(343),null,null);t.exports=a.exports},291:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{string:function(){return this.$store.getters["Config/key"].footer_text.value}}}},292:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Pagination",props:{getter:{type:String,required:!0}},computed:{pagination:function(){return this.$store.getters[this.getter]},length:function(){if(this.pagination){for(var t=0,e=0;t<this.pagination.total;t+=this.pagination.per_page,e++);return e}},page:{get:function(){return this.$route.query.page},set:function(t){this.$router.push({query:{page:t}})}}},mounted:function(){this.length&&this.page>this.length&&this.updatePage(1),this.page||this.updatePage(1)},methods:{updatePage:function(t){this.$router.push({query:{page:t}})}}}},293:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{link:function(){return this.$store.getters["Config/key"].player_url.value},volumeIcon:function(){var t=this.volume;return t>50?"volume_up":t<=50&&t>25?"volume_down":t<=25&&t>0?"volume_mute":t<=0?"volume_off":void 0},volumeMedia:function(){return this.volume/100},isMuted:function(){return this.volume<=0}},data:function(){return{loaded:!1,playing:!1,volume:100,message:""}},mounted:function(){setTimeout(this.updateSchedule,10),setInterval(this.updateSchedule,5e3)},methods:{_handlePlayingUi:function(t){},_handleLoaded:function(t){this.togglePlaying()},_handlePause:function(t){},_handlePlay:function(t){},togglePlaying:function(){this.playing=!this.playing,this.playing?this.$refs.audio.play():this.$refs.audio.pause()},toggleVolume:function(){0!==this.volume?this.volume=0:this.volume=100},updateSchedule:function(){var t=this.$store.getters["Schedules/current"].schedules.filter(function(t){var e=function(t,e){var n=e.split(":");return t.setHours(parseInt(n[0],10)),t.setMinutes(parseInt(n[1],10)),t.getTime()},n=(new Date).getTime();return n>=e(new Date,t.pivot.starts_at)&&n<=e(new Date,t.pivot.ends_at)})[0];if(t){var e=t.name.length>60?t.name.slice(0,57)+"...":t.name,n=t.speaker.length>30?t.speaker.slice(0,27)+"...":t.speaker;this.message="Agora na radio: "+e+" com "+n}else this.message="Programação inativa"}},watch:{volumeMedia:function(t){this.$refs.audio.volume=t}}}},340:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",[n("span",{staticClass:"ml-2"},[t._v(t._s(t.string))]),t._v(" "),n("v-spacer"),t._v(" "),n("span",{staticClass:"mr-2"},[t._v("Criado por "),n("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"//sites.xfind.com.br/",closs:"black-text"}},[n("b",[t._v("XFind")])])])],1)},staticRenderFns:[]}},343:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{staticClass:"hidden-sm-and-down",staticStyle:{"margin-right":"80px"}},[t._v(t._s(t.message))]),t._v(" "),n("v-chip",{staticClass:"elevation-2",staticStyle:{"margin-right":"80px",position:"absolute",bottom:"-25px",right:"0"},attrs:{id:"volume_control"}},[n("v-avatar",{staticStyle:{cursor:"pointer"},on:{click:t.toggleVolume}},[n("v-icon",{attrs:{light:""}},[t._v(t._s(t.volumeIcon))])],1),t._v(" "),n("v-slider",{staticStyle:{position:"relative",top:"10px"},attrs:{light:"","thumb-label":"",snap:"",step:"10"},model:{value:t.volume,callback:function(e){t.volume=e},expression:"volume"}})],1),t._v(" "),n("v-btn",{staticClass:"blue",attrs:{dark:"",fab:"",absolute:"",bottom:"",right:""},nativeOn:{click:function(e){e.stopPropagation(),t.togglePlaying(e)}}},[n("v-icon",[t._v(t._s(t.playing?"pause":"play_arrow"))])],1),t._v(" "),n("audio",{ref:"audio",staticStyle:{display:"none"},attrs:{src:t.link,preload:"auto"},on:{timeupdate:t._handlePlayingUi,loadeddata:t._handleLoaded,pause:t._handlePause,play:t._handlePlay}})],1)},staticRenderFns:[]}},358:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"","justify-space-around":""}},[n("v-card",{attrs:{light:""}},[n("v-pagination",{attrs:{length:t.length,value:parseInt(t.page)},on:{input:t.updatePage}})],1)],1)},staticRenderFns:[]}}});