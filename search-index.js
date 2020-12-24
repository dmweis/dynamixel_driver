var searchIndex = JSON.parse('{\
"dynamixel_driver":{"doc":"","i":[[3,"DynamixelDriver","dynamixel_driver","",null,null],[12,"port","","",0,null],[0,"instructions","","",null,null],[3,"StatusError","dynamixel_driver::instructions","",null,null],[12,"instruction_error","","",1,null],[12,"overload_error","","",1,null],[12,"checksum_error","","",1,null],[12,"range_error","","",1,null],[12,"overheating_error","","",1,null],[12,"angle_limit_error","","",1,null],[12,"input_voltage_error","","",1,null],[3,"Instruction","","",null,null],[12,"payload","","",2,null],[3,"SyncCommand","","",null,null],[12,"id","","",3,null],[12,"value","","",3,null],[3,"SyncCommandFloat","","",null,null],[12,"id","","",4,null],[12,"value","","",4,null],[5,"calc_checksum","","",null,[[]]],[11,"check_error","","",1,[[],[["serialporterror",4],["result",4]]]],[11,"read_instruction","","",2,[[]]],[11,"write_u8","","",2,[[]]],[11,"write_u16","","",2,[[]]],[11,"ping","","",2,[[]]],[11,"sync_command","","",2,[[["vec",3],["synccommand",3]]]],[11,"serialize","","",2,[[],["vec",3]]],[11,"new","","",3,[[],["synccommand",3]]],[11,"new","","",4,[[],["synccommandfloat",3]]],[11,"id","","",4,[[]]],[11,"value","","",4,[[]]],[0,"serial_driver","dynamixel_driver","",null,null],[3,"Status","dynamixel_driver::serial_driver","",null,null],[12,"id","","",5,null],[12,"params","","",5,null],[3,"DynamixelProtocol","","",null,null],[3,"FramedSerialDriver","","",null,null],[12,"framed_port","","",6,null],[4,"SerialPortError","","",null,null],[13,"Timeout","","",7,null],[13,"StatusError","","",7,null],[13,"ChecksumError","","",7,null],[13,"HeaderError","","",7,null],[13,"ReadingError","","",7,null],[13,"DecodingError","","",7,null],[13,"IdMismatchError","","",7,null],[17,"TIMEOUT","","",null,null],[8,"FramedDriver","","",null,null],[10,"send","","",8,[[["instruction",3]],[["box",3],["pin",3]]]],[10,"receive","","",8,[[],[["pin",3],["box",3]]]],[11,"new","","",5,[[["vec",3]],["status",3]]],[11,"id","","",5,[[]]],[11,"as_u8","","",5,[[],["result",6]]],[11,"as_u16","","",5,[[],["result",6]]],[11,"new","","",6,[[],[["result",6],["framedserialdriver",3]]]],[11,"with_baud_rate","","",6,[[],[["result",6],["framedserialdriver",3]]]],[17,"ID","dynamixel_driver","",null,null],[17,"MAX_TORQUE","","",null,null],[17,"TORQUE_ENABLED","","",null,null],[17,"CW_COMPLIANCE_SLOPE","","",null,null],[17,"CWW_COMPLIANCE_SLOPE","","",null,null],[17,"GOAL_POSITION","","",null,null],[17,"MOVING_SPEED","","",null,null],[17,"PRESENT_POSITION","","",null,null],[17,"PRESENT_TEMPERATURE","","",null,null],[17,"PRESENT_VOLTAGE","","",null,null],[11,"new","","",0,[[],[["dynamixeldriver",3],["result",6]]]],[11,"with_baud_rate","","",0,[[],[["dynamixeldriver",3],["result",6]]]],[11,"read_u8","","",0,[[]]],[11,"read_u16","","",0,[[]]],[11,"write_u8","","",0,[[]]],[11,"write_u16","","",0,[[]]],[11,"ping","","",0,[[]]],[11,"write_id","","",0,[[]]],[11,"write_torque","","",0,[[]]],[11,"read_temperature","","",0,[[]]],[11,"read_voltage","","",0,[[]]],[11,"read_position","","",0,[[]]],[11,"read_position_degrees","","",0,[[]]],[11,"read_position_rad","","",0,[[]]],[11,"write_compliance_slope_both","","",0,[[]]],[11,"sync_write_compliance_both","","",0,[[["synccommand",3],["vec",3],["into",8]]]],[11,"sync_write_torque","","",0,[[["synccommand",3],["vec",3],["into",8]]]],[11,"write_position","","",0,[[]]],[11,"write_position_degrees","","",0,[[]]],[11,"write_position_rad","","",0,[[]]],[11,"sync_write_position","","",0,[[["synccommand",3],["vec",3],["into",8]]]],[11,"sync_write_position_degrees","","",0,[[["vec",3],["synccommandfloat",3]]]],[11,"sync_write_position_rad","","",0,[[["vec",3],["synccommandfloat",3]]]],[11,"sync_write_moving_speed","","",0,[[["synccommand",3],["vec",3],["into",8]]]],[11,"read_max_torque","","",0,[[]]],[11,"search_all","","",0,[[]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","dynamixel_driver::instructions","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_string","","",1,[[],["string",3]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","dynamixel_driver::serial_driver","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_string","","",7,[[],["string",3]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"send","","",6,[[["instruction",3]],[["box",3],["pin",3]]]],[11,"receive","","",6,[[],[["pin",3],["box",3]]]],[11,"from","dynamixel_driver::instructions","",3,[[]]],[11,"from","","",3,[[]]],[11,"from","","",4,[[]]],[11,"clone","","",2,[[],["instruction",3]]],[11,"clone","","",3,[[],["synccommand",3]]],[11,"clone","","",4,[[],["synccommandfloat",3]]],[11,"eq","","",1,[[["statuserror",3]]]],[11,"ne","","",1,[[["statuserror",3]]]],[11,"eq","","",2,[[["instruction",3]]]],[11,"ne","","",2,[[["instruction",3]]]],[11,"eq","","",3,[[["synccommand",3]]]],[11,"ne","","",3,[[["synccommand",3]]]],[11,"eq","","",4,[[["synccommandfloat",3]]]],[11,"ne","","",4,[[["synccommandfloat",3]]]],[11,"eq","dynamixel_driver::serial_driver","",5,[[["status",3]]]],[11,"ne","","",5,[[["status",3]]]],[11,"fmt","dynamixel_driver::instructions","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","dynamixel_driver::serial_driver","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","dynamixel_driver::instructions","",1,[[["formatter",3]],["result",6]]],[11,"fmt","dynamixel_driver::serial_driver","",7,[[["formatter",3]],["result",6]]],[11,"decode","","",9,[[["bytesmut",3]],[["option",4],["result",6]]]],[11,"encode","","",9,[[["instruction",3],["bytesmut",3]],["result",6]]]],"p":[[3,"DynamixelDriver"],[3,"StatusError"],[3,"Instruction"],[3,"SyncCommand"],[3,"SyncCommandFloat"],[3,"Status"],[3,"FramedSerialDriver"],[4,"SerialPortError"],[8,"FramedDriver"],[3,"DynamixelProtocol"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);