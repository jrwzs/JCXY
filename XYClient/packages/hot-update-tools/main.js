const Fs=require("fire-fs"),Path=require("fire-path");module.exports={load(){},unload(){},messages:{showPanel(){Editor.Panel.open("hot-update-tools")},"editor:build-finished":(e,t)=>{if("win32"===t.platform||"android"===t.platform||"ios"===t.platform||"mac"===t.platform){let e=Editor.url("packages://hot-update-tools/main_code.js");if(Fs.existsSync(e)){const o=Fs.readFileSync(e,"utf-8");let a=Path.normalize(t.dest),i=Path.join(a,"main.js"),d=o+Fs.readFileSync(i,"utf8");Fs.writeFileSync(i,d),Editor.log("[HotUpdateTools] SearchPath updated in built main.js for hot update");let l=(new Date).getTime();Editor.Ipc.sendToPanel("hot-update-tools","hot-update-tools:onBuildFinished",l),Editor.require("packages://hot-update-tools/core/CfgUtil.js").updateBuildTimeByMain(l)}else Editor.log(`文件丢失: ${e}`)}else Editor.log(`[HotUpdateTools] don't need update main.js, platform: ${t.platform}`)}}};