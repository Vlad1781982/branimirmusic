lse{
t=%RemPiO2(c,rempio2result);
u=rempio2result[0];
w=rempio2result[1];
}
;
var z=1-(t&2);
if(t&1){
var k=%_DoubleHi(u)&0x7fffffff;
var h=u*u;
var r=h*(4.16666666666666019037e-02+h*(-1.38888888888741095749e-03+h*(2.48015872894767294178e-05+h*(-2.75573143513906633035e-07+h*(2.08757232129817482790e-09+h*-1.13596475577881948265e-11)))));
if(k<0x3fd33333){
return(1-(0.5*h-(h*r-u*w)))*z;
}else{
var A;
if(k>0x3fe90000){
A=0.28125;
}else{
A=%_ConstructDouble(%_DoubleHi(0.25*u),0);
}
var B=0.5*h-A;
return(1-A-(B-(h*r-u*w)))*z;
}
;
}else{
var h=u*u;
var l=h*u;
var r=8.33333333332248946124e-03+h*(-1.98412698298579493134e-04+h*(2.75573137070700676789e-06+h*(-2.50507602534068634195e-08+h*1.58969099521155010221e-10)));
return(u-((h*(0.5*w-l*r)-w)-l*-1.66666666666666324348e-01))*z;
;
}
}
function MathCosSlow(c){
var t,u,w;
var j=%_DoubleHi(c);
var k=j&0x7fffffff;
if(k<0x4002d97c){
if(j>0){
var h=c-kMath[1];
if(k!=0x3ff921fb){
u=h-kMath[2];
w=(h-u)-kMath[2];
}else{
h-=kMath[3];
u=h-kMath[4];
w=(h-u)-kMath[4];
}
t=1;
}else{
var h=c+kMath[1];
if(k!=0x3ff921fb){
u=h+kMath[2];
w=(h-u)+kMath[2];
}else{
h+=kMath[3];
u=h+kMath[4];
w=(h-u)+kMath[4];
}
t=-1;
}
}else if(k<=0x413921fb){
var o=$abs(c);
t=(o*kMath[0]+0.5)|0;
var r=o-t*kMath[1];
var i=t*kMath[2];
u=r-i;
if(k-(%_DoubleHi(u)&0x7ff00000)>0x1000000){
o=r;
i=t*kMath[3];
r=o-i;
i=t*kMath[4]-((o-r)-i);
u=r-i;
if(k-(%_DoubleHi(u)&0x7ff00000)>0x3100000){
o=r;
i=t*kMath[5];
r=o-i;
i=t*kMath[6]-((o-r)-i);
u=r-i;
}
}
w=(r-u)-i;
if(j<0){
t=-t;
u=-u;
w=-w;
}
}else{
t=%RemPiO2(c,rempio2result);
u=rempio2result[0];
w=rempio2result[1];
}
;
if(t&1){
var z=(t&2)-1;
var h=u*u;
var l=h*u;
var r=8.33333333332248946124e-03+h*(-1.98412698298579493134e-04+h*(2.75573137070700676789e-06+h*(-2.50507602534068634195e-08+h*1.58969099521155010221e-10)));
return(u-((h*(0.5*w-l*r)-w)-l*-1.66666666666666324348e-01))*z;
;
}else{
var z=1-(t&2);
var k=%_DoubleHi(u)&0x7fffffff;
var h=u*u;
var r=h*(4.16666666666666019037e-02+h*(-1.38888888888741095749e-03+h*(2.48015872894767294178e-05+h*(-2.75573143513906633035e-07+h*(2.08757232129817482790e-09+h*-1.13596475577881948265e-11)))));
if(k<0x3fd33333){
return(1-(0.5*h-(h*r-u*w)))*z;
}else{
var A;
if(k>0x3fe90000){
A=0.28125;
}else{
A=%_ConstructDouble(%_DoubleHi(0.25*u),0);
}
var B=0.5*h-A;
return(1-A-(B-(h*r-u*w)))*z;
}
;
}
}
function MathSin(c){
c=+c;
if((%_DoubleHi(c)&0x7fffffff)<=0x3fe921fb){
var h=c*c;
var l=h*c;
var r=8.33333333332248946124e-03+h*(-1.98412698298579493134e-04+h*(2.75573137070700676789e-06+h*(-2.50507602534068634195e-08+h*1.58969099521155010221e-10)));
return(c-((h*(0.5*0-l*r)-0)-l*-1.66666666666666324348e-01));
;
}
return+MathSinSlow(c);
}
function MathCos(c){
c=+c;
if((%_DoubleHi(c)&0x7fffffff)<=0x3fe921fb){
var k=%_DoubleHi(c)&0x7fffffff;
var h=c*c;
var r=h*(4.16666666666666019037e-02+h*(-1.38888888888741095749e-03+h*(2.48015872894767294178e-05+h*(-2.75573143513906633035e-07+h*(2.08757232129817482790e-09+h*-1.13596475577881948265e-11)))));
if(k<0x3fd33333){
return(1-(0.5*h-(h*r-c*0)));
}else{
var A;
if(k>0x3fe90000){
A=0.28125;
}else{
A=%_ConstructDouble(%_DoubleHi(0.25*c),0);
}
var B=0.5*h-A;
return(1-A-(B-(h*r-c*0)));
}
;
}
return+MathCosSlow(c);
}
function MathTan(c){
c=c*1;
if((%_DoubleHi(c)&0x7fffffff)<=0x3fe921fb){
return KernelTan(c,0,1);
}
var t,u,w;
var j=%_DoubleHi(c);
var k=j&0x7fffffff;
if(k<0x4002d97c){
if(j>0){
var h=c-kMath[1];
if(k!=0x3ff921fb){
u=h-kMath[2];
w=(h-u)-kMath[2];
}else{
h-=kMath[3];
u=h-kMath[4];
w=(h-u)-kMath[4];
}
t=1;
}else{
var h=c+kMath[1];
if(k!=0x3ff921fb){
u=h+kMath[2];
w=(h-u)+kMath[2];
}else{
h+=kMath[3];
u=h+kMath[4];
w=(h-u)+kMath[4];
}
t=-1;
}
}else if(k<=0x413921fb){
var o=$abs(c);
t=(o*kMath[0]+0.5)|0;
var r=o-t*kMath[1];
var i=t*kMath[2];
u=r-i;
if(k-(%_DoubleHi(u)&0x7ff00000)>0x1000000){
o=r;
i=t*kMath[3];
r=o-i;
i=t*kMath[4]-((o-r)-i);
u=r-i;
if(k-(%_DoubleHi(u)&0x7ff00000)>0x3100000){
o=r;
i=t*kMath[5];
r=o-i;
i=t*kMath[6]-((o-r)-i);
u=r-i;
}
}
w=(r-u)-i;
if(j<0){
t=-t;
u=-u;
w=-w;
}
}else{
t=%RemPiO2(c,rempio2result);
u=rempio2result[0];
w=rempio2result[1];
}
;
return KernelTan(u,w,(t&1)?-1:1);
}




function MathLog1p(c){
c=c*1;
var j=%_DoubleHi(c);
var C=j&0x7fffffff;
var D=1;
var E=c;
var G=1;
var H=0;
var I=c;
if(j<0x3fda827a){
if(C>=0x3ff00000){
if(c===-1){
return-(1/0);
}else{
return $NaN;
}
}else if(C<0x3c900000){
return c;
}else if(C<0x3e200000){
return c-c*c*0.5;
}
if((j>0)||(j<=-0x402D413D)){
D=0;
}
}
if(j>=0x7ff00000)return c;
if(D!==0){
if(j<0x43400000){
I=1+c;
G=%_DoubleHi(I);
D=(G>>20)-1023;
H=(D>0)?1-(I-c):c-(I-1);
H=H/I;
}else{
G=%_DoubleHi(I);
D=(G>>20)-1023;
}
G=G&0xfffff;
if(G<0x6a09e){
I=%_ConstructDouble(G|0x3ff00000,%_DoubleLo(I));
}else{
++D;
I=%_ConstructDouble(G|0x3fe00000,%_DoubleLo(I));
G=(0x00100000-G)>>2;
}
E=I-1;
}
var J=0.5*E*E;
if(G===0){
if(E===0){
if(D===0){
return 0.0;
}else{
return D*kMath[34]+(H+D*kMath[35]);
}
}
var K=J*(1-kMath[36]*E);
if(D===0){
return E-K;
}else{
return D*kMath[34]-((K-(D*kMath[35]+H))-E);
}
}
var q=E/(2+E);
var h=q*q;
var K=h*((kMath[37+0])
+h*((kMath[37+1])
+h*
((kMath[37+2])
+h*((kMath[37+3])
+h*
((kMath[37+4])
+h*((kMath[37+5])
+h*(kMath[37+6])
))))));
if(D===0){
return E-(J-q*(J+K));
}else{
return D*kMath[34]-((J-(q*(J+K)+(D*kMath[35]+H)))-E);
}
}


function MathExpm1(c){
c=c*1;
var d;
var L;
var M;
var D;
var o;
var H;
var j=%_DoubleHi(c);
var N=j&0x80000000;
var d=(N===0)?c:-c;
j&=0x7fffffff;
if(j>=0x4043687a){
if(j>=0x40862e42){
if(j>=0x7ff00000){
return(c===-(1/0))?-1:c;
}
if(c>kMath[44])return(1/0);
}
if(N!=0)return-1;
}
if(j>0x3fd62e42){
if(j<0x3ff0a2b2){
if(N===0){
L=c-kMath[34];
M=kMath[35];
D=1;
}else{
L=c+kMath[34];
M=-kMath[35];
D=-1;
}
}else{
D=(kMath[45]*c+((N===0)?0.5:-0.5))|0;
o=D;
L=c-o*kMath[34];
M=o*kMath[35];
}
c=L-M;
H=(L-c)-M;
}else if(j<0x3c900000){
return c;
}else{
D=0;
}
var P=0.5*c;
var Q=c*P;
var R=1+Q*((kMath[46+0])
+Q*((kMath[46+1])
+Q*
((kMath[46+2])
+Q*((kMath[46+3])
+Q*(kMath[46+4])
))));
o=3-R*P;
var S=Q*((R-o)/(6-c*o));
if(D===0){
return c-(c*S-Q);
}else{
S=(c*(S-H)-H);
S-=Q;
if(D===-1)return 0.5*(c-S)-0.5;
if(D===1){
if(c<-0.25)return-2*(S-(c+0.5));
return 1+2*(c-S);
}
if(D<=-2||D>56){
d=1-(S-c);
d=%_ConstructDouble(%_DoubleHi(d)+(D<<20),%_DoubleLo(d));
return d-1;
}
if(D<20){
o=%_ConstructDouble(0x3ff00000-(0x200000>>D),0);
d=o-(S-c);
d=%_ConstructDouble(%_DoubleHi(d)+(D<<20),%_DoubleLo(d));
}else{
o=%_ConstructDouble((0x3ff-D)<<20,0);
d=c-(S+o);
d+=1;
d=%_ConstructDouble(%_DoubleHi(d)+(D<<20),%_DoubleLo(d));
}
}
return d;
}



function MathSinh(c){
c=c*1;
var T=(c<0)?-0.5:0.5;
var C=$abs(c);
if(C<22){
if(C<3.725290298461914e-9)return c;
var o=MathExpm1(C);
if(C<1)return T*(2*o-o*o/(o+1));
return T*(o+o/(o+1));
}
if(C<709.7822265625)return T*$exp(C);
if(C<=kMath[51]){
var i=$exp(0.5*C);
var o=T*i;
return o*i;
}
return c*(1/0);
}

function MathCosh(c){
c=c*1;
var k=%_DoubleHi(c)&0x7f