function run_fps_test(){
  
  let fps = 0 // FPS
  let frame = 0  // 帧数

  // 开始时间戳
  const start = new Date().getTime()
  
  const loop = () => {
    
    requestAnimationFrame( () => {
      frame ++
      const t = new Date().getTime()
      fps = 1000 * frame / (t - start)
      console.log("fps:" + fps)
      
      loop()
   
    })
  }
  loop()
}

run_fps_test()




