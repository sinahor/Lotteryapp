import './Animation.css';

export default function Animation() {
    return (
        <>
            <div className="anim_outer">
                <div className="anim_left" >
                    <div className="anim_left_row1">
                        <label className='anim_label_bold'>Animation 1</label>
                    </div>
                    <div className="anim_left_row2">
                        video
                    </div>
                    <div className="anim_left_row3">
                        <label className='anim_label_small'>approx: 2/3 area</label>
                    </div>
                </div>
                <div className="anim_right">
                    <div className="anim_right_row1">
                        <label className='anim_label_bold'>Animation 2</label>
                    </div>
                    <div className="anim_right_row2">
                        video
                    </div>
                    <div className="anim_right_row3">
                        <label className='anim_label_small'>approx: 1/3 area</label>
                    </div>
                </div>
            </div>
        </>
    )
}