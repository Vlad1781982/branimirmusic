123)
--- testing: '3.4a' - '0' ---
float(3.4)
--- testing: '3.4a' - '65' ---
float(-61.6)
--- testing: '3.4a' - '-44' ---
float(47.4)
--- testing: '3.4a' - '1.2' ---
float(2.2)
--- testing: '3.4a' - '-7.7' ---
float(11.1)
--- testing: '3.4a' - 'abc' ---
float(3.4)
--- testing: '3.4a' - '123abc' ---
float(-119.6)
--- testing: '3.4a' - '123e5' ---
float(-12299996.6)
--- testing: '3.4a' - '123e5xyz' ---
float(-12299996.6)
--- testing: '3.4a' - ' 123abc' ---
float(-119.6)
--- testing: '3.4a' - '123 abc' ---
float(-119.6)
--- testing: '3.4a' - '123abc ' ---
float(-119.6)
--- testing: '3.4a' - '3.4a' ---
float(0)
--- testing: '3.4a' - 'a5.9' ---
float(3.4)
--- testing: 'a5.9' - '0' ---
int(0)
--- testing: 'a5.9' - '65' ---
int(-65)
--- testing: 'a5.9' - '-44' ---
int(44)
--- testing: 'a5.9' - '1.2' ---
float(-1.2)
--- testing: 'a5.9' - '-7.7' ---
float(7.7)
--- testing: 'a5.9' - 'abc' ---
int(0)
--- testing: 'a5.9' - '123abc' ---
int(-123)
--- te