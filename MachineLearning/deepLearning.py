# -*- coding: utf-8 -*-
from keras.models import Sequential, load_model
from keras.layers import Dense, Dropout, Activation
import keras
from keras import optimizers
from keras.layers import Input, Dense
from keras.optimizers import SGD

from sklearn.preprocessing import LabelEncoder,MinMaxScaler
import numpy as np
import pandas as pd

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

model = Sequential()
model.add(Dense(6,input_dim=11))
model.add(Activation('relu'))
model.add(Dense(6))
model.add(Activation('relu'))
model.add(Dense(1))         
model.add(Activation('sigmoid'))

#opt = optimizers.adam(lr=0.0001)

model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['mae'])
model.fit(giris,cikis, epochs=10, batch_size=5, validation_split=0.13)
tahmin = np.array([0,0,0.837838,0.2011,0.5,0,0.666667,0.125,0.185,1,0]).reshape(1,11)
#model.save("model.h5");
sonuc=model.predict(tahmin)
print(sonuc)