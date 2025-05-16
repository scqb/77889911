basic.showIcon(IconNames.Happy)
I2C_LCD1602.LcdInit(39)
cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Stop, 0)
while (!(input.buttonIsPressed(Button.A))) {
	
}
basic.forever(function () {
    cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Run, 200)
    I2C_LCD1602.ShowString("go forward!", 0, 0)
    basic.pause(1000)
    cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Back, 200)
    I2C_LCD1602.ShowString("Back  up!", 0, 0)
    basic.pause(1000)
    cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Left, 200)
    I2C_LCD1602.ShowString("turn Left!", 0, 0)
    basic.pause(1000)
    cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Right, 200)
    I2C_LCD1602.ShowString("turn Right!", 0, 0)
    basic.pause(1000)
    cbit_小车类.CarCtrl(cbit_小车类.CarState.Car_Stop)
    I2C_LCD1602.ShowString("Stop!!!!!!!!!", 0, 0)
})
