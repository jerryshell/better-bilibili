// ==UserScript==
// @name         Better Bilibili
// @namespace    jerryshell
// @version      0.1
// @description  更好的 Bilibili
// @author       github.com/jerryshell
// @match        *://*.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// @license      GNU Affero General Public License v3.0
// ==/UserScript==

/* jshint esversion: 6 */

(() => {
    'use strict';
    new MutationObserver(() => {
        // 删除视频评论区
        const videoCommentElement = document.querySelector('div.bb-comment');
        if (videoCommentElement) {
            videoCommentElement.remove();
        }
        const videoBHeadElement = document.querySelector('div.b-head');
        if (videoBHeadElement) {
            videoBHeadElement.remove();
        }
        const videoReviewElement = document.querySelector('div#review_module');
        if (videoReviewElement) {
            videoReviewElement.remove();
        }
        // 删除视频弹幕列表
        const danmakuBoxElement = document.querySelector('div#danmukuBox');
        if (danmakuBoxElement) {
            danmakuBoxElement.childNodes.forEach(node => node.remove());
        }
        // 删除视频弹幕
        const videoDanmakuElement = document.querySelector('div.bilibili-player-video-danmaku')
        if (videoDanmakuElement) {
            videoDanmakuElement.remove();
        }
        // 删除动态评论区
        const tcList = document.querySelectorAll('div.button-bar.tc-slate');
        if (tcList) {
            tcList.forEach(tc => {
                if (tc.childNodes.length === 3) {
                    tc.childNodes[1].remove();
                }
            });
        }
        // 首页删除分区导航
        const biliChannel = document.querySelector('div.bili-header__channel');
        if (biliChannel) {
            biliChannel.childNodes.forEach(node => node.remove());
        }
        // 首页只保留【科技】和【纪录片】分区
        const biliGridList = document.querySelectorAll('section.bili-grid');
        if (biliGridList) {
            biliGridList.forEach(biliGrid => {
                const titleElement = biliGrid.querySelector('a.title');
                if (titleElement) {
                    const title = titleElement.textContent;
                    console.log('title', title);
                    if (title.indexOf('科技') === -1 && title.indexOf('纪录片') === -1) {
                        console.log('remove', biliGrid);
                        biliGrid.remove();
                    }
                } else {
                    biliGrid.remove();
                }
            });
        }
    }).observe(document.querySelector('body'), {
        childList: true,
        attributes: true,
        subtree: true,
    });
})();
