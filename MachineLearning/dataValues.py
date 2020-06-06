# -*- coding: utf-8 -*-
from sklearn.preprocessing import LabelEncoder,MinMaxScaler
import pandas as pd
import pymysql.cursors


db = pymysql.connect(host='localhost',
        user='root',
        password='',
        db='dbarabam',
        charset='utf8',
        cursorclass=pymysql.cursors.DictCursor)

baglanti = db.cursor()

veri = pd.read_csv("data/tblcardetail4.csv", sep=",")

giris=veri.iloc[:,2:13]
cikis=veri.iloc[:,13].values


encoder=LabelEncoder()

giris.iloc[:,0]=encoder.fit_transform(giris.iloc[:,0])
giris.iloc[:,1]=encoder.fit_transform(giris.iloc[:,1])
giris.iloc[:,2]=encoder.fit_transform(giris.iloc[:,2])
giris.iloc[:,4]=encoder.fit_transform(giris.iloc[:,4])
giris.iloc[:,5]=encoder.fit_transform(giris.iloc[:,5])
giris.iloc[:,6]=encoder.fit_transform(giris.iloc[:,6])
giris.iloc[:,7]=encoder.fit_transform(giris.iloc[:,7])
giris.iloc[:,9]=encoder.fit_transform(giris.iloc[:,9])
giris.iloc[:,10]=encoder.fit_transform(giris.iloc[:,10])

sc = MinMaxScaler(feature_range=(0,1))

giris=sc.fit_transform(giris)
giris[:,8]=veri.iloc[:,10].values
giris[:,3]=veri.iloc[:,5].values

length = len(veri)

yeni = []
for i in range(length): 
    yeni.append([veri.iloc[i,12],giris[i,10]]) 
    

df = pd.DataFrame(yeni)

for i in range(length):
    sonuc = baglanti.execute('SELECT * FROM mlvalues WHERE data=%s',(df.iloc[i,0]))
    if(sonuc==0):
        baglanti.execute('INSERT INTO mlvalues VALUES(%s,%s,%s)',(None,df.iloc[i,0],str(df.iloc[i,1])))
        db.commit()



