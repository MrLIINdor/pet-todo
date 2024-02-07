import React, { useState, useRef, useEffect } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { ColorPicker } from 'primereact/colorpicker';
import { Button } from 'primereact/button';
import { Slider } from 'primereact/slider';
import { useDispatch, useSelector } from 'react-redux';
import { saveDraw, clearDraw } from '../../app/api/draw';
import './DrawPage.css';

export default function DrawPage() {
  const ref = useRef();
  const dispatch = useDispatch();
  const [color, setColor] = useState('#000');
  const [stroke, setStroke] = useState(4);
  const [drawData, setDrawData] = useState();
  const { data } = useSelector((state) => state.draw);

  useEffect(() => {
    ref.current.loadPaths(data);
  }, []);

  return (
    <div>
      <div className="pens-box">
        <div className="pens-box__color">
          <p className="pens-box__page">Ширина штриха</p>
          <Slider
            min={1}
            max={10}
            value={stroke}
            onChange={(e) => setStroke(e.value)}
            className="slider-box"
          />
        </div>

        <div className="button-boxs">
          <ColorPicker format="hex" value={color} onChange={(e) => setColor(`#${e.value}`)} />
          <Button
            onClick={() => {
              dispatch(clearDraw()), ref.current?.clearCanvas();
            }}
            label="Очистить"
            icon="pi pi-trash"
            className="p-button-danger button-boxs__trash"
          />
        </div>
      </div>
      <div className="container-drawer">
        <ReactSketchCanvas
          ref={ref}
          style={false}
          onChange={(e) => dispatch(saveDraw(e))}
          strokeWidth={stroke}
          strokeColor={color}
        />
      </div>
    </div>
  );
}
