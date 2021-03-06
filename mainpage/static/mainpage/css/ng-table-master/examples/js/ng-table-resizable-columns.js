--TEST--
Bug #67403: Add signatureType to openssl_x509_parse
--SKIPIF--
<?php
if (!extension_loaded("openssl")) die("skip");
--FILE--
<?php
$r = openssl_x509_parse(file_get_contents(__DIR__.'/bug64802.pem'));
var_dump($r['signatureTypeSN']);
var_dump($r['signatureTypeLN']);
var_dump($r['signatureTypeNID']);

$r = openssl_x509_parse(file_get_contents(__DIR__.'/bug37820cert.pem'));
var_dump($r['signatureTypeSN']);
var_dump($r['signatureTypeLN']);
var_dump($r['signatureTypeNID']);
--EXPECTF--
string(8) "RSA-SHA1"
string(21) "sha1WithRSAEncryption"
int(65)
string(7) "RSA-MD5"
string(20) "md5WithRSAEncryption"
int(8)
                                                                                                                                                                                                                                                                                                                                                                                                                    g/Object ()V java/util/regex/Pattern compile -(Ljava/lang/String;)Ljava/util/regex/Pattern; matcher 3(Ljava/lang/CharSequence;)Ljava/util/regex/Matcher; java/util/regex/Matcher matches ()Z replaceFirst !  	     
                 \     *· *,µ *+¸ µ ±           	  
 	                                    /     *´ °                               /     *´ °                               @     *´ +¶ ¶ ¬                                     D     *´ +¶ *´ ¶ °                                    !PK
    üALF$# ¢  ¢  ?   com/intellij/lang/apacheConfig/rewriting/UrlRewriteEngine.classÊþº¾   2 ° ]
 ^ _
   `	  a
  b c  d e f g h i j i k l
  m n
  o
  p q
  ` e r s t e u
 v w
 v x y z s { | t
   }
  ~ g  | { |   	myProject &Lcom/intellij/openapi/project/Project; getInstance c(Lcom/intellij/openapi/project/Project;)Lcom/intellij/lang/apacheConfig/rewriting/UrlRewriteEngine; Code LineNumberTable LocalVariableTable p <init> )(Lcom/intellij/openapi/project/Project;)V this ;Lcom/intellij/lang/apacheConfig/rewriting/UrlRewriteEngine; project applyRewriteRules 1(Lcom/intellij/psi/PsiElement;)Ljava/lang/String; rewriteRule 6Lcom/intellij/lang/apacheConfig/rewriting/RewriteRule; i$ Ljava/util/Iterator; l Ljava/util/List; file +Lcom/intellij/lang/apacheConfig/psi/ACFile; 
psiElement Lcom/intellij/psi/PsiElement; files url Ljava/lang/String; LocalVariableTypeTable HLjava/util/List<Lcom/intellij/lang/apacheConfig/rewriting/RewriteRule;>; =Ljava/util/List<Lcom/intellij/lang/apacheConfig/psi/ACFile;>; StackMapTable    l getHtaccessFiles /(Lcom/intellij/psi/PsiElement;)Ljava/util/List; f result containingFile Lcom/intellij/psi/PsiFile; contentRoot &Lcom/intellij/openapi/vfs/VirtualFile; dir Lcom/intellij/psi/PsiDirectory;    	Signature \(Lcom/intellij/psi/PsiElement;)Ljava/util/List<Lcom/intellij/lang/apacheConfig/psi/ACFile;>; lookupForHtaccess L(Lcom/intellij/psi/PsiDirectory;)Lcom/intellij/lang/apacheConfig/psi/ACFile; arr$ [Lcom/intellij/psi/PsiFile; len$ I W 
SourceFile UrlRewriteEngine.java 9com/intellij/lang/apacheConfig/rewriting/UrlRewriteEngine    )  ! " E F &com/intellij/psi/xml/XmlAttributeValue              )com/intellij/lang/apacheConfig/psi/ACFile   4com/intellij/lang/apacheConfig/rewriting/RewriteRule     java/util/ArrayList        ¡ ¢ # £ ¤ ¥ ¦ § ¨ © ª  « ¬ T U ­ ¬ ® ¯ java/lang/Object j