import { useFrame } from "react-three-fiber";
import state from '../../state';

function CameraControls() {
  return (
    // 렌더 루프의 프레임마다 코드 실행
    useFrame(({camera, scene})=>{
      if (state.shouldUpdate) {
        // 첫번째 인수 : 팬 이동 vector 위치값,
        // 두번째 인수 : 이동 간격 (0-1)
        camera.position.lerp(state.cameraPos, 0.05);
        scene.orbitControls.target.lerp(state.target, 0.1);
        scene.orbitControls.update();

        // 반복을 돌 때 마다의 현재 위치값
        const diff = camera.position.clone().sub(state.cameraPos).length();
        if (diff < 0.1) state.shouldUpdate = false; 
      }
    })
  )
}

export default CameraControls