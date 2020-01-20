use dynamixel_driver;

fn main() {
    let mut driver = dynamixel_driver::DynamixelDriver::new("COM11").unwrap();
    loop {
        driver.write_position(9, 0.0).unwrap();
        loop {
            let pos = driver.read_position(9).unwrap();
            if pos < 1.0 {
                break;
            }
        }
        driver.write_position(9, 300.0).unwrap();
        loop {
            let pos = driver.read_position(9).unwrap();
            if pos > 299.0 {
                break;
            }
        }
    }
}